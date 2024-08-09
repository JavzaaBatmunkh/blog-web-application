import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { Trending } from "@/components/trending";
import { ArticleCard } from "@/components/articleCard";
import { Test } from "@/components/test";
import Head from "next/head";
import { TrendingSwiper } from "@/components/trendingSwiper";
const tags = [{ value: "", name: "All" },
{ value: "javascript", name: "JavaScript" },
{ value: "react", name: "React" },
{ value: "webdev", name: "Web development" },
{ value: "database", name: "Database" },
{ value: "frontend", name: "Frontend" },
{ value: "backend", name: "Backend" },
{ value: "motivation", name: "Motivation" },
]

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadArticles()
    setPage(1)
  }, [selectedCategory]);

  async function loadArticles() {
    setLoading(true)

    const response = await fetch(`https://dev.to/api/articles?top=365&tag=${selectedCategory}&page=1&per_page=3`)
    const tagArticles = await response.json()
    setArticles(tagArticles)

    setLoading(false)
  }

  async function loadMore() {

    const newPage = page + 1;
    setPage(newPage)

    const response = await fetch(`https://dev.to/api/articles?top=365&tag=${selectedCategory}&page=${newPage}&per_page=3`)
    const data = await response.json()

    const newArticles = articles.concat(data)
    setArticles(newArticles)
  }
  // console.log({ articles })
  return (
    <main >
      <Head>
        <title>Web App</title>
      </Head>
      <Header />
      <div className="container mx-auto p-8 max-w-7xl">
        <Test />
        <TrendingSwiper/>
       
       
        <h1 className="py-12 text-2xl font-bold">All Blog Post</h1>

        <div className="flex gap-8 mb-8 font-bold flex-wrap">
          {tags.map(tag => (
            <div key={tag.value} className={`cursor-pointer hover:text-orange-500 
              ${selectedCategory === tag.value ? "text-orange-600" : ""} `}
              onClick={() => setSelectedCategory(tag.value)}>
              {tag.name}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 " >
          {articles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>

        <div className="text-center py-6" onClick={loadMore}>
          <button disabled={loading} className="btn btn-lg btn-accent ">
            {loading && <span className="loading loading-spinner text-success"></span>}
            Load more</button>
        </div>

      </div>
      <Footer />
    </main>
  );
}
