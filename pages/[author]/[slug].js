import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from 'next/router'
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import dayjs from "dayjs";
export default function Page() {

  const [article, setArticle] = useState();
  const router = useRouter()

  console.log(router.query)
  const { author, slug } = router.query
  useEffect(() => {
    if (router.isReady) {
      getArticle()
    }

  }, [router.isReady]);

  function getArticle() {
    fetch(`https://dev.to/api/articles/${author}/${slug}`)
      .then(response => { return response.json(); })
      .then((detail) => {
        setArticle(detail)

      });
  }

  // console.log({article})

  if (!article) return <div>loading...</div>

  return (
    <main className="bg-white text-black">
      <Header />
      <div className="container mx-auto text-black mt-24 max-w-3xl">
        <div className="text-[#181A2A] text-4xl font-semibold mb-10">{article.title}</div>
        <div className="flex gap-10 text-[#696A75] pb-10">
          <div>{article.user.username}</div>
          <div>{dayjs(article.published_at).format('MMMM DD, YYYY')} </div>
        </div>
        <div className="prose text-black">{parse(article.body_html)}</div>
      </div>
      <Footer />

    </main>
  );
}


