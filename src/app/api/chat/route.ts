import { NextResponse } from "next/server";
import { generateStudyBuddyReply } from "@/lib/gemini";

export async function POST(request: Request) {
  const body = await request.json();
  const message = body.message;

  if (!message || typeof message !== "string") {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }
  
  //await new Promise((resolve) => setTimeout(resolve, 1000));

  const reply = await generateStudyBuddyReply(message);

  return NextResponse.json({
    reply,
  });
}
