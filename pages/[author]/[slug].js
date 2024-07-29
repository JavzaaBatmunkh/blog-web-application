import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { useRouter } from 'next/router'

export default function Page(){

  const [article, setArticle] = useState();
  const router = useRouter()
 
  console.log(router.query)
  const {author, slug}= router.query
  useEffect(() => {
    if (router.isReady){
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

//   console.log({article})

  if (!article) return <div>loading...</div>

  return (
    <main className="container mx-auto">
        <div>{article.title}</div>
        <div className="prose">{parse(article.body_html)}</div>
    </main>
  );
}


