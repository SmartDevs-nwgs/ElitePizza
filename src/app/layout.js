import './index.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <title>Elite Pizzas</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/Vankours.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
