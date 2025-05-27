import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

    const authenticated = true; // Simula um usuário não autenticado

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {

        console.log('ACESSO NÃO AUTORIZADO');

        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next()
}