import parse from 'html-react-parser';
export default async function Page({params}) {
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`)
    const article = await response.json()
    return <main>
        <div className="container mx-auto text-black mt-24 max-w-3xl">
            <div className="text-[#181A2A] text-4xl font-semibold mb-10">{article.title}</div>
            <div className="flex gap-10 text-[#696A75] pb-10">
                <div>{article.user.username}</div>
                {/* <div>{dayjs(article.published_at).format('MMMM DD, YYYY')} </div> */}
            </div>
            <div className="prose text-black">{parse(article.body_html)}</div>
        </div>

    </main>
}