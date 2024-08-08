import Script from 'next/script'
export default function Page() {
    return (
        <div>
            <Script async src="https://cse.google.com/cse.js?cx=63c3767f13da442e2">
            </Script>
            <div className="gcse-search"></div>
        </div>
    )
}