import { Inter } from 'next/font/google'
import './ui/globals.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
