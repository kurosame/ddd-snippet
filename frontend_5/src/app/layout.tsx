import { Inter } from 'next/font/google'

import { Provider } from '@/app/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ja">
    <body className={inter.className}>
      <Provider>{children}</Provider>
    </body>
  </html>
)

export default Layout
