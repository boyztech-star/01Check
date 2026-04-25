import { aggregateSearch } from "@/lib/aggregator";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q");

  if (!q) return Response.json({ error: "missing" });

  const data = await aggregateSearch(q);
  return Response.json(data);
}