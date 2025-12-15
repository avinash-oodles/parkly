

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // ---------- GET USER DATA ----------

    // Previous URL (referrer)
    const previousURL = req.headers.get("referer") || "Not available";

    // IP Address
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "Unknown";

    // User Agent → Browser + OS
    const userAgent = req.headers.get("user-agent") || "";
    const browserInfo = parseUserAgent(userAgent);

    // ---------- SEND EMAIL ----------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD, 
      },
    });

    const mailOptions = {
      from: `"Waitlist Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: "New Waitlist Submission",
      html: `
        <h3>New Waitlist Entry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Previous URL:</strong> ${previousURL}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Browser:</strong> ${browserInfo}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

// -------- PARSE BROWSER + OS FROM USER AGENT ---------
function parseUserAgent(ua: string) {
  let browser = "Unknown Browser";
  let os = "Unknown OS";

  if (ua.includes("Chrome")) browser = "Chrome";
  else if (ua.includes("Firefox")) browser = "Firefox";
  else if (ua.includes("Safari") && !ua.includes("Chrome")) browser = "Safari";
  else if (ua.includes("Edg")) browser = "Edge";

  if (ua.includes("Windows")) os = "Windows";
  else if (ua.includes("Mac OS")) os = "macOS";
  else if (ua.includes("Android")) os = "Android";
  else if (ua.includes("iPhone")) os = "iOS";

  return `${browser} (${os})`;
}
