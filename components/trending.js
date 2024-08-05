import Link from "next/link";
import { useEffect, useState } from "react";

import Image from "next/image";

export function Trending() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadMore()
    }, []);

    function loadMore() {
        fetch(`https://dev.to/api/articles?top=7`)
            .then(response => { return response.json(); })
            .then((data) => {
                const newArticles = articles.concat(data)
                setArticles(newArticles)
                console.log(articles)
            });
    }
    return (
        <div>
            <h1 className="py-12 text-2xl font-bold "> Trending</h1>

            <div className="lg:flex-row lg:flex flex flex-col gap-8 md:grid md:grid-cols-2 hidden md:block" >
                {articles.map((item, index) => (
                    index < 4 &&
                    <div key={item.id} className="card bg-base-100 bg-white border-2 border-gray image-full" >
                        <figure>
                            <Image src={item.social_image} width={500} height={500} className="aspect-[1/1] object-cover" />
                        </figure>
                        <div className="card-body font-bold justify-end">
                            <div className="flex gap-4 flex-wrap">
                                <div className="badge badge-primary text-white">{item.tag_list[0]}</div>
                            </div>
                            <Link href={item.path} className="text-white ">
                                {item.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:hidden">
                <div className="carousel w-full rounded-xl">
                    {articles.map((item, index) => (
                        index < 4 &&
                        <div id={`item${index}`} className="carousel-item w-full relative" key={item.id}>
                            <div className="relative w-full">
                                <Image src={item.social_image} width={600} height={500} className="aspect-video object-cover w-full"/>
                                <div className="absolute  inset-0 bg-[#141624] opacity-50"></div>
                            </div>
                            
                            <div className="absolute left-2 bottom-2 flex flex-col ">
                                <div className="card-body">
                                    <div className="badge badge-primary">{item.tag_list[0]}</div>
                                    <Link href={item.path} className="text-2xl font-semibold text-white">
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full justify-center gap-2 py-2">
                    <a href="#item0" className="btn btn-xs">1</a>
                    <a href="#item1" className="btn btn-xs">2</a>
                    <a href="#item2" className="btn btn-xs">3</a>
                    <a href="#item3" className="btn btn-xs">4</a>
                </div>
            </div>
        </div>
    )
}