import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/articleCard";

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
    fetch(`https://dev.to/api/articles?top=365&page=${page}&per_page=${pageSize}`)
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
            <ArticleCard key={item.id} article={item}/>
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
