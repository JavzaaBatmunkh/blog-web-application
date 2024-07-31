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
            <h1 className="py-12 text-2xl font-bold"> Trending</h1>

            <div className="lg:flex-row lg:flex flex flex-col gap-8 md:grid md:grid-cols-2" >
                {articles.map((item, index) => (
                    index < 4 &&
                    <div key={item.id} className="card bg-base-100 bg-white border-2 border-gray image-full">
                        <figure>
                        <Image src={item.social_image} width={500} height={500} className="aspect-[1/1] object-cover" />

                        </figure>
                        <div className="card-body font-bold justify-end">
                            <div className="flex gap-4 flex-wrap">
                                <div className="badge badge-primary text-white">{item.tag_list[0]}</div>
                            </div>
                            <Link href={item.path}  className="text-white ">
                                {item.title}
                            </Link>

                        </div>
                    </div>
                ))}
            </div>




        </div>
    )
}