'use client'

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
        <div className="dark:bg-slate-400">
            <div className="flex items-center py-8 mx-auto max-w-6xl justify-between">
                <Image src="/Logo.svg" width={200} height={200} className="mx-8"/>
                <div className="gap-10 justify-between items-center hidden sm:flex ">
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                    <form action="/search" className="mx-8">
                        <input type="search" className="input" placeholder="Search" name="q" />
                    </form>
                </div>


                <button className="sm:hidden text-4xl" onClick={openMenu}>
                    <GiHamburgerMenu />
                </button>
                <div
                    className={`z-50 fixed top-0 bottom-0 w-full bg-slate-500/90  transition-all 
            ${open ? "opacity-100 right-64" : "opacity-0 -right-full"}`}
                    onClick={closeMenu}
                ></div>
                <div
                    className={`z-50 flex flex-col p-8 fixed top-0 bottom-0  w-64 bg-white dark:bg-slate-800 dark:text-white shadow-lg text-black transition-all 
        ${open ? "right-0 " : "-right-full"}`}
                >
                    <Image src="/Logo.svg" width={200} height={200}/>
                    <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                    <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
                </div>
            </div>
        </div>)
}