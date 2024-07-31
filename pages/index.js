import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime' // ES 2015
import "@/components/dayjs-mn"
import { Trending } from "@/components/trending";
import { Carousel } from "@/components/carousel";


dayjs.extend(relativeTime)

const pageSize = 3


export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPAge] = useState(1)
  const [ended, setEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  const [category, setCategory] = useState();

  useEffect(() => {
    loadMore()
  }, []);

  function selectCategory(name){
    setCategory(name);
    loadCategoryArticles(name);

  }

  function loadMore() {
    setLoading(true)
    fetch(`https://dev.to/api/articles?top=365&page=${page}&per_page=${pageSize}&tag=${category}`)
      .then(response => { return response.json(); })
      .then((data) => {
        const newArticles = articles.concat(data)
        setArticles(newArticles)
        setPAge(page + 1)
        if (data.length < pageSize) {
          setEnded(true)
        }
        setLoading(false)
        console.log(articles)
      });
  }

  console.log({articles})

  return (
    <main className="bg-white text-black ">
      <div className="container mx-auto p-8 max-w-7xl">
        <Header />
        <Carousel />
        <Trending />

        <h1 className="py-12 text-2xl font-bold">All Blog Post</h1>

        <div className="join mb-4">
          <input className="join-item btn border-black" type="radio" name="options" aria-label="All" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="Javascript" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="React" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="Typescript" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="Database" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="Frontend" />
          <input className="join-item btn border-black" type="radio" name="options" aria-label="Backend" />

          <div onClick={() => selectCategory('javascript')}>JS</div>
          <div>React</div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 " >
          {articles.map((item, index) => (
            <div key={item.id} className="card bg-base-100 bg-white border-2 border-gray">
              <div className="card-body">
                <div className="flex gap-2 flex-wrap">
                  <div className="badge badge-primary">{item.tag_list[0]}</div>
                </div>
                <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-600" />
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
        <div>
          {articles.map((item, index) => {

            if (!item.tag_list.includes('javascript')) {
              return null;
            }
              return (

              <div key={item.id} className="card bg-base-100 bg-white border-2 border-gray">
                <div className="card-body">
                  <div className="flex gap-2 flex-wrap">
                    <div className="badge badge-primary">{item.tag_list[0]}</div>
                  </div>
                  <Image src={item.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-600" />
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

            )
          })}
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
