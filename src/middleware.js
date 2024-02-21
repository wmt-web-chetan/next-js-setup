import { NextResponse, NextRequest } from "next/server";

// Please add all routes that is protected
const protectedRoutes = ["/", "/dashboard", "/aboutus"];

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const cookies = request.cookies.get("token")?.value;

  const isAuth = cookies ? true : false;

  const isLoginPage = pathname.startsWith("/login");

  const isAccessingSensitiveRoute = protectedRoutes.includes(
    request.nextUrl.pathname
  );
  if (isLoginPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }
  if (!isAuth && isAccessingSensitiveRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (isAuth && pathname === "/") {
    return NextResponse.next();
  }
}
