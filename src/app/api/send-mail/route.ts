// import nodemailer from "nodemailer";
// import { NextRequest, NextResponse } from "next/server";


// export async function POST(req: NextRequest) {
//     try {
//         const { name, email } = await req.json();

//         //  transporter
//         const transporter = nodemailer.createTransport({
//             host: "smtp.gmail.com", 
//             port: 587,
//             secure: false,
//             auth: {
//                 user: process.env.SMTP_EMAIL,
//                 pass: process.env.SMTP_PASSWORD,
//             },
//         });

//         // 2. email options
//         const mailOptions = {
//             from: `"Waitlist Form" <${process.env.SMTP_EMAIL}>`,
//             to: process.env.SMTP_EMAIL, 
//             subject: "New Waitlist Submission",
//             html: `
//                 <h3>New Waitlist Form Submission</h3>
//                 <p><strong>Name:</strong> ${name}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//             `,
//         };

//         // 3. Send the email
//         await transporter.sendMail(mailOptions);

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
//     }
// }





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

    // Location from IP (using ipapi.co)
    let location = "Unknown";
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoRes.json();
      if (geoData && geoData.city) {
        location = `${geoData.city}, ${geoData.country_name}`;
      }
    } catch (err) {
      console.error("Geo API failed:", err);
    }

    // ---------- SEND EMAIL ----------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD, // must be Gmail App Password
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
        ${phone ? `<p>Phone: ${phone}</p>` : ""}
        <p><strong>Previous URL:</strong> ${previousURL}</p>
        <p><strong>IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${location}</p>
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
