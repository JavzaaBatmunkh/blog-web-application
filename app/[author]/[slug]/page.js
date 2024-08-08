import parse from 'html-react-parser';

export async function generateMetadata({params}){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json()
    return {
        title: article.title,
        icons:{
            icon:[{url:"https://cdn-icons-png.flaticon.com/128/16179/16179689.png"}]
        },
        openGraph: {
            title: article.title,
            description: article.description,
            images:[{url: article.social_image}],  
        },
    }

}
export default async function Page({params}) {
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json()

    return <main>
        <div className="container mx-auto mt-24 max-w-3xl">
            <div className=" text-4xl font-semibold mb-10">{article.title}</div>
            <div className="flex gap-10 pb-10">
                <div>{article.user.username}</div>
                {/* <div>{dayjs(article.published_at).format('MMMM DD, YYYY')} </div> */}
            </div>
            <div className="prose">{parse(article.body_html)}</div>
        </div>

    </main>
}