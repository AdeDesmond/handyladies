import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const test = await req.json();
    console.log(test);
    return NextResponse.json({ status: "success", test }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
