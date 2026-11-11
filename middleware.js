import { NextResponse } from "next/server";

// Admin pages are locked on the server (lib/auth.js requireAdmin). This just stops caching/indexing.
export function middleware() {
  const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}
export const config = { matcher: ["/admin/:path*"] };
