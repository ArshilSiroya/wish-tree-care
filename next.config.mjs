import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure modules resolve from this app's node_modules (not a parent folder)
    root: __dirname,
  },
};

export default nextConfig;
