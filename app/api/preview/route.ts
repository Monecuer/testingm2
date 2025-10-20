import { NextResponse } from "next/server";

/** Zero-cost OG fetcher: extracts <title> + og:image */
export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) return NextResponse.json({ error: "url required" }, { status: 400 });
    const html = await fetch(url, { cache: "no-store" }).then(r => r.text());
    const title = (html.match(/<title>(.*?)<\/title>/i)?.[1] || "").trim();
    const og = (html.match(/property=["']og:image["']\s+content=["']([^"']+)/i)?.[1] || "").trim();
    return NextResponse.json({ title, image: og || null });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "failed" }, { status: 500 });
  }
}
