import "@/styles/globals.css";
import { Work_Sans } from 'next/font/google'
const inter = Work_Sans({ subsets: ['latin'] })

 
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

