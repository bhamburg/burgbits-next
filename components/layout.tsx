import '../app/globals.css'
import { merriweather } from './fonts'
import Nav from './nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className={merriweather.className}>
        {children}
      </main>
    </>
  )
}
