import React from 'react';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Home - Aula Next JS do zero!',
  description: 'Aprendendo Next JS do zero com Sujeito Programador',
  openGraph: {
    title: 'Aprendendo Next JS do zero com Sujeito no Youtube',
    description: 'Aprendendo Next JS do zero com Sujeito Programador',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }

}

export const revalidate = 60; // Revalida a cada 60 segundos

export default function Home() {

  const randomNumber = Math.random() * 10;

  return (
    <div>
      <h1>Home</h1>
      <h2>Numero gerado: {randomNumber}</h2>
    </div>
  )
}