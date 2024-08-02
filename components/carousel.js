import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
export function Carousel() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadMore()
    }, []);


    function loadMore() {
        fetch(`https://dev.to/api/articles?top=30`)
            .then(response => { return response.json(); })
            .then((data) => {
                const newArticles = articles.concat(data)
                setArticles(newArticles)
                console.log(articles)
            });
    }
    return (
        <div className="carousel w-full rounded-xl hidden md:flex" >
            {articles.map((item, index) => (
                index>1 &&
                <div id={`slide${index}`} className="carousel-item relative w-full" key={item.id}>
                    <div>
                        <Image src={item.social_image} width={1200} height={1200} className="aspect-video object-cover bg-slate-600 w-full" />
                        <div className="inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        
                    </div>
                    <div className="absolute left-2 bottom-2 bg-slate-100 flex flex-col card">
                        <div className="card-body">
                            <div className="badge badge-primary">{item.tag_list[0]}</div>
                            <Link href={item.path} className="text-4xl font-semibold">
                                {item.title}
                            </Link>


                            <div>{dayjs(item.published_at).format("MMMM DD, YYYY")}</div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${index - 1}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${index + 1}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    )
}