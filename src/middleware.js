import { NextResponse } from "next/server"

export function middleware(request) {


    return NextResponse.redirect(new URL('/login',request.url))

    // if(request.nextUrl.pathname!="/login"){
        
    //     return NextResponse.redirect(new URL('/login',request.url))
    // }
 }
 export const config = {
    matcher:['/about/aboutcollage:path*','/login/loginteacher:path*','/studentlist/:path*']
 }