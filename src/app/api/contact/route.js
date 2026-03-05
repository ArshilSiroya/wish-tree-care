import { google } from "googleapis";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!sheetId || !clientEmail || !privateKey) {
      console.error("Missing GOOGLE_SHEET_ID, GOOGLE_CLIENT_EMAIL, or GOOGLE_PRIVATE_KEY in .env.local");
      return Response.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const range = process.env.GOOGLE_CONTACT_SHEET_RANGE || "Contact-Us!A2:F";

    const timestamp = new Date().toLocaleString("en-AU", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [
          [
            timestamp,
            firstName || "",
            lastName || "",
            email || "",
            phone || "",
            message || "",
          ],
        ],
      },
    });

    return Response.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return Response.json(
      {
        success: false,
        message: "Error submitting form",
        ...(process.env.NODE_ENV === "development" && { detail: error.message }),
      },
      { status: 500 }
    );
  }
}
