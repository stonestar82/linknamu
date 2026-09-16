import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { links } from "@/lib/links";

const DB_NAME = "linknamu";
const COLLECTION_NAME = "clicks";

export async function GET() {
  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection<{ _id: string; count: number }>(
    COLLECTION_NAME
  );

  const docs = await collection.find({}).toArray();
  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json({ counts });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !links.some((link) => link.id === id)) {
    return NextResponse.json({ error: "Invalid link id" }, { status: 400 });
  }

  const client = await clientPromise;
  const collection = client.db(DB_NAME).collection<{ _id: string; count: number }>(
    COLLECTION_NAME
  );

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ id, count: result?.count ?? 1 });
}
