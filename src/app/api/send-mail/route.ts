import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const { name, email } = await req.json();

        //  transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // 2. email options
        const mailOptions = {
            from: `"Waitlist Form" <${process.env.SMTP_EMAIL}>`,
            to: process.env.SMTP_EMAIL, 
            subject: "New Waitlist Submission",
            html: `
                <h3>New Waitlist Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
            `,
        };

        // 3. Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
