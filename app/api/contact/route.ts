import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { firstName, lastName, email, company, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "First name, last name, email, and message are required." },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "OneHeart Group <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL ?? "info@oneheartgroup.com",
      replyTo: email,
      subject: `New Contact Form: ${fullName}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
