import React from 'react'
import Link from 'next/link'

export default function NotFound() {

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-10">Página 404 não encontrada!</h1>
            <p>Esaa página que tentou acessar não existe!</p>

            <Link href='/'>
            Voltar para Home
            </Link>
        </div>
    )
}