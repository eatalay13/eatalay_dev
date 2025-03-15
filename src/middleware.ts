import { decrypt, SessionPayload } from "@/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/((?!admin/login)(/.*)?)"];
const publicRoutes = ["/admin/login"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some((route) =>
    new RegExp(route).test(path)
  );
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  // 3. Decrypt the session from the cookie
  let session: SessionPayload | null = null;
  try {
    const cookie = (await cookies()).get("session")?.value;
    session = await decrypt(cookie);
  } catch (error) {
    if (isProtectedRoute && !session?.userId && error) {
      return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
    }
  }

  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (
    isPublicRoute &&
    session?.userId &&
    !req.nextUrl.pathname.startsWith("/")
  ) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|manifest.webmanifest|.*\\.png$|.*\\.svg$|.*\\.jpg$|.*\\.ico$).*)",
  ],
};
