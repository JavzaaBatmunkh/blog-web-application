import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export function Footer() {
    return (<div className="bg-[#E8E8EA]">
        <div className="container mx-auto flex justify-between pt-16 pb-6">
            <div className="w-72">
                <h2 className="font-bold">About</h2>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad
                minim veniam

                <div><b>Email :</b> info@jstemplate.net</div>
                <div><b>Phone :</b>880 123 456 789</div>
            </div>
            <div className="flex flex-col">
                <button>Home</button>
                <button>Blog</button>
                <button>Contact</button>
            </div>
            <div className="flex gap-6">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>
        </div>
        
        <div className="container mx-auto py-5 flex justify-between border-t border-t-slate-400">
            
            <Image src="/Copyright.svg" width={223} height={223}/>
            <div className="flex gap-8">
                <div>Term of Use</div>
                <div>Privacy Policy</div>
                <div>Cookie Policy</div>
            </div>

        </div>
    </div>

    )
}