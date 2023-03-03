import './globals.css'

export const metadata = {
  title: 'Next App',
  description: 'Next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>navbar</nav>
        {children}
        <footer>footer</footer>
        </body>
    </html>
  )
}
