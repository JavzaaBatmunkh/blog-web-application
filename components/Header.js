import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Header() {
    const [open, setOpen] = useState(false)
    function openMenu() {
        setOpen(true)
    }
    function closeMenu() {
        setOpen(false)
    }

    return (
        <div className="bg-yellow flex items-center text-black pb-8 justify-between max-w-4xl mx-auto">
            <Image src="/Logo.svg" width={200} height={200} />
            <div className=" gap-10 items-center hidden sm:flex">
                <Link href="/"><button>Home</button></Link>
                <Link href="/blog"><button>Blog</button></Link>
                <Link href="/contact"><button>Contact</button></Link>
            </div>
            <label className="input input-bordered flex items-center gap-2 bg-slate-100 hidden md:block">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
            <button className="sm:hidden text-4xl" onClick={openMenu}>
                <GiHamburgerMenu />
            </button>
            <div
                className={` fixed top-0 bottom-0 w-full bg-slate-500/90  transition-all 
            ${open ? "opacity-100 right-64" : "opacity-0 -right-full"}`}
                onClick={closeMenu}
            ></div>
            <div
                className={` flex flex-col p-8 fixed top-0 bottom-0  w-64 bg-white dark:bg-slate-800 dark:text-white shadow-lg text-black transition-all 
        ${open ? "right-0 " : "-right-full"}`}
            >
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>)
}