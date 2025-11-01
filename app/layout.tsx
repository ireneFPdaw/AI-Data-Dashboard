import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <nav className="mx-auto max-w-4xl flex items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold text-lg">Job Ready Next</Link>
            <div className="flex gap-3 text-sm">
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/auth/login" className="rounded border px-3 py-1">Login</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
      </body>
    </html>
  )
}
