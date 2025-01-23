import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Redirect to login if token is not present
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    Cookies.remove("token");
    Cookies.remove("accessToken");
    return NextResponse.redirect(loginUrl);
  }
  // Proceed to the requested route
  return NextResponse.next();
}

// "Matching Paths"
export const config = {
  matcher: [
    // Match all pages except for login, api routes, and static files
    "/((?!_next/static|_next/image|login|api|favicon.ico).*)",
  ],
};
