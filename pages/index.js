import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const pageSize=6


export default function Home() {
  const [articles, setArticles] = useState([]);
  const [page, setPAge]=useState(1)
  const [ended, setEnded]=useState(false)

  useEffect(() => {
    loadMore()
  }, []);

  function loadMore() {
    fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${pageSize}`)
      .then(response => { return response.json(); })
      .then((data) => {
        const newArticles=articles.concat(data)
        setArticles(newArticles)
        setPAge(page+1)
        if (data.length<pageSize){
          setEnded(true)
        }
      });
  }

  return (
    <main className="container mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {articles.map((item) => (
          <div key={item.id} className="card bg-base-100">
            <div className="card-body">
              <div className="badge badge-primary">{item.tag_list[0]}</div>
              <Image src={item.social_image} width={500} height={500} />
              <Link href={item.url} target="_blank">
                {item.title}
              </Link>
              <div className="flex items-center gap-4 ">
                <Image src={item.user.profile_image_90} width={50} height={50} />
                <div>{item.user.name}</div>
                <div>{item.published_at}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(!ended)&&      
      <div className="text-center py-6" onClick={loadMore}>
        <button className="btn btn-lg btn-accent ">Load more</button>
      </div>}

    </main>
  );
}
