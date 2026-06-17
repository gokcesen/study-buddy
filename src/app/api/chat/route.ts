import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message;

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    reply: `Study Buddy received: ${message}`,
  });
}
