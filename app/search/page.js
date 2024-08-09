import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'



import Script from 'next/script'
export default function Page() {
    return (
        <div className='px-10'>
            <Header />
            <div className='w-1/2 m-auto'>
                <Script async src="https://cse.google.com/cse.js?cx=63c3767f13da442e2">
                </Script>
                <div className="gcse-search"></div>
            </div>
            <Footer />
        </div>
    )
}