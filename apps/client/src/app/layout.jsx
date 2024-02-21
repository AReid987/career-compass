import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
var inter = Inter({ subsets: ['latin'] })
export var metadata = {
  title: 'Career Compass',
  description: 'Navigating your job search with AI',
  authors: [{ name: 'Antonio Reid' }],
}
export default function RootLayout(_a) {
  var children = _a.children
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
