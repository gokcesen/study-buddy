import { NextResponse } from "next/server";

import { generateStudyBuddyReply } from "@/lib/gemini";

const MAX_MESSAGE_LENGTH = 1000;

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message;

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less.` },
      { status: 400 },
    );
  }

  const reply = await generateStudyBuddyReply(message);

  return NextResponse.json({
    reply,
  });
}
