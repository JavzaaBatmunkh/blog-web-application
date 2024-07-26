import Image from "next/image";

export function Header() {
    return (
        <div className="bg-yellow flex text-black p-8 justify-between">
            <Image src="/Logo.svg" width={200} height={200} />
            <div className="flex gap-10">
                <button>Home</button>
                <button>Blog</button>
                <button>Contact</button>
            </div>
            <label className="input input-bordered flex items-center gap-2 bg-slate-100">
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


        </div>)
}