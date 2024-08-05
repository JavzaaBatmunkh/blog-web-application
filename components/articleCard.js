import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime' // ES 2015
import "@/components/dayjs-mn"


dayjs.extend(relativeTime)
export function ArticleCard({article}) {
    return (
        <div key={article.id} className="card bg-base-100 bg-white border-2 border-gray">
            <div className="card-body flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 flex-wrap text-xs mb-2 h-10">
                        {article.tag_list.map(tag => (
                            <div className="badge badge-primary" >{tag}</div>
                        ))}
                    </div>
                    <Image src={article.social_image} width={500} height={500} className="aspect-video object-cover bg-slate-600 mb-4" />
                    <Link href={article.path} className="text-2xl font-semibold">
                        {article.title}
                    </Link>
                </div>

                <div className="flex items-center gap-4 justify-between text-[#97989F] text-base font-medium">
                    <Image src={article.user.profile_image_90} width={50} height={50} className="rounded-full" />
                    <div>{article.user.name}</div>
                    <div>{dayjs(article.published_at).locale("mn").fromNow()}</div>
                </div>
            </div>
        </div>
    )
}