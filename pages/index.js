import { useEffect, useState } from "react";


export default function Home() {
  const [articles, setArticles]=useState([]);
  
  useEffect(()=> {
    fetch("https://dev.to/api/articles?username=paul_freeman").then(response => {return response.json();})
    .then((data)=> {
      setArticles(data)
      console.log({data})});
  }, []);


  console.log({articles})
  return (
    <main > 
      {articles.map(item=>(
        <div key={item.id}>{item.title}</div>
      ))}
    </main>
  );
}
