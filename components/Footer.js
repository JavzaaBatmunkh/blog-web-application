import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <div className="sm:bg-[#E8E8EA] dark:bg-slate-600 mt-4 ">
            <div className="container mx-auto flex sm:justify-between pt-8 justify-center p-8 max-w-7xl">
                <div className="w-72 hidden sm:block">
                    <h2 className="font-bold">About</h2>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad
                    minim veniam

                    <div><b>Email :</b> info@jstemplate.net</div>
                    <div><b>Phone :</b>880 123 456 789</div>
                </div>
                <div className="sm:flex gap-20">
                    <div className="flex flex-col mb-10">
                        <Link href="/"><button>Home</button></Link>
                        <Link href="/blog"><button>Blog</button></Link>
                        <Link href="/contact"><button>Contact</button></Link>
                    </div>
                    <div className="flex gap-6">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                </div>

            </div>

            <div className="container mx-auto py-5 flex justify-center sm:justify-between sm:border-t sm:border-t-slate-400 p-8 max-w-7xl">

                <Image src="/Copyright.svg" width={223} height={223} />
                <div className="flex gap-8 hidden sm:block">
                    <div>Term of Use</div>
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>

            </div>
        </div>

    )
}