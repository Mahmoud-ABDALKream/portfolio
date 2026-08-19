import { NextResponse } from "next/server";

/**
 * Contact form API route — receives form submissions, validates them,
 * and returns a structured response.
 *
 * This is the "backend" for the contact form on /contact.
 * Data flow: browser → POST /api/contact → this function → JSON response
 *
 * In production, you'd forward the submission to an email service (Resend,
 * Formspree, SendGrid) or save it to a database (Vercel KV, Supabase).
 * For the MVP, we validate + return the data so the user can verify it works.
 */

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming form data
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validate — all three fields required
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing required fields. Name, email, and message are all required.",
          received: { name: !!name, email: !!email, message: !!message },
        },
        { status: 400 }
      );
    }

    // 3. Validate email format (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid email format. Please provide a valid email address.",
          received_email: email,
        },
        { status: 400 }
      );
    }

    // 4. Construct a mailto link so the submission can be forwarded
    const mailtoLink = `mailto:mahmoudabdelkreambusiness@gmail.com?subject=Portfolio%20Contact%3A%20${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    // 5. Return the structured response
    // In production, you'd also send an email or save to DB here.
    return NextResponse.json({
      ok: true,
      message: "Submission received successfully.",
      timestamp: new Date().toISOString(),
      submission: {
        name,
        email,
        message,
        message_length: message.length,
      },
      next_step: "Forward to email or save to database (production setup).",
      mailto_forward: mailtoLink,
    });
  } catch (error) {
    // 6. Handle JSON parse errors or other issues
    return NextResponse.json(
      {
        ok: false,
        error: "Failed to process submission. Make sure you're sending valid JSON.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Also handle GET so people can test the endpoint in a browser
export async function GET() {
  return NextResponse.json({
    endpoint: "/api/contact",
    method: "POST",
    description: "Contact form submission API. Send { name, email, message } as JSON.",
    example: {
      name: "John Doe",
      email: "john@example.com",
      message: "Hi Mahmoud, I'd like to discuss a project.",
    },
  });
}
