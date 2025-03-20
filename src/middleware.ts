import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Check if user is authenticated (Modify this logic as per your auth system)
  const token = req.cookies.get("token"); // Assuming authentication is stored in cookies
  console.log(token);

  // If the user is not authenticated and trying to access a protected route
  // if (!token) {
  //   const redirectUrl = encodeURIComponent(pathname); // Encode pathname for safety
  //   const destination = `/login?redirect=${redirectUrl}&price=${search}`; // Redirect to login with intended path

  //   return NextResponse.redirect(new URL(destination, req.url));
  // }

  return NextResponse.next(); // Continue with the request
}

// Apply the middleware only to specific paths
export const config = {
  matcher: [], // Adjust this to match your protected routes
};
