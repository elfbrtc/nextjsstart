import { NextResponse } from "next/server";

export function middleware(req) {
    console.log(NextResponse, "NextResponse" );
    return NextResponse.rewrite(new URL("/about2", req.url))
}

export const config = {
    matcher: [ '/about/:path*', '/dashboard/:path*' ],
}
