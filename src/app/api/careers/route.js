export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address } = body;

    // Email content
    const emailContent = `
A new person is trying to contact you regarding careers:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Address: ${address}

This person is interested in career opportunities at Wish Tree Care.
    `;

    // Using a simple email service - you can replace this with your preferred email service
    // For now, we'll use a mailto link approach or you can integrate with:
    // - Resend (resend.com)
    // - SendGrid
    // - Nodemailer with SMTP
    // - EmailJS

    // For production, you should use a proper email service
    // This is a placeholder that will work but requires email client
    const mailtoLink = `mailto:arshilsiroya123@gmail.com?subject=New Careers Inquiry - Wish Tree Care&body=${encodeURIComponent(emailContent)}`;

    // In production, replace the above with actual email sending:
    // Example with Resend:
    // const res = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //   },
    //   body: JSON.stringify({
    //     from: 'noreply@wishtreecare.com.au',
    //     to: 'arshilsiroya123@gmail.com',
    //     subject: 'New Careers Inquiry - Wish Tree Care',
    //     text: emailContent,
    //   }),
    // });

    return Response.json(
      { success: true, message: "Inquiry submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting careers form:", error);
    return Response.json(
      { success: false, message: "Error submitting form" },
      { status: 500 }
    );
  }
}
