import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime' // ES 2015
import "@/components/dayjs-mn"

dayjs.extend(relativeTime)

const pageSize = 3


export default function BlogListing() {
  const [articles, setArticles] = useState([]);
  const [page, setPAge] = useState(1)
  const [ended, setEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadMore()
  }, []);

  function loadMore() {
    setLoading(true)
    fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`)
      .then(response => { return response.json(); })
      .then((data) => {
        const newArticles = articles.concat(data)
        setArticles(newArticles)
        setPAge(page + 1)
        if (data.length < pageSize) {
          setEnded(true)
        }
        setLoading(false)
      });
  }

  return (
    <main className="bg-white text-black">
      <div className="container mx-auto">
        <Header />
        <h1 className="py-12 text-2xl font-bold">All Blog Post</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 " >
          {articles.map((item) => (
            <div key={item.id} className="card bg-base-100 bg-white border-2 border-gray">
              <div className="card-body">
                <div className="badge badge-primary">{item.tag_list[0]}</div>
                <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-600"/>
                <Link href={item.path} >
                  {item.title}
                </Link>
                <div className="flex items-center gap-4 ">
                  <Image src={item.user.profile_image_90} width={50} height={50} />
                  <div>{item.user.name}</div>
                  <div>{dayjs(item.published_at).locale("mn").fromNow()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(!ended) &&
          <div className="text-center py-6" onClick={loadMore}>
            <button disabled={loading} className="btn btn-lg btn-accent ">
              {loading && <span className="loading loading-spinner text-success"></span>}
              Load more</button>
          </div>}
      </div>
      <Footer />
    </main>
  );
}
