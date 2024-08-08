import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dayjs from "dayjs";
import Link from "next/link";

export function Test() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadMore()
    }, []);


    function loadMore() {
        fetch(`https://dev.to/api/articles?top=30`)
            .then(response => { return response.json(); })
            .then((data) => {
                const newArticles = articles.concat(data)
                setArticles(newArticles)
                console.log(articles)
            });
    }
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='mb-8 rounded-xl'
        >
            {articles.map((item, index) => (
                index > 1 &&
                <SwiperSlide>
                    <Image src={item.social_image} width={1200} height={1200} className="aspect-video object-cover bg-slate-600 w-full" />
                    <div className="absolute left-2 bottom-2 bg-slate-100 flex flex-col card">
                        <div className="card-body">
                            <div className="badge badge-primary">{item.tag_list[0]}</div>
                            <Link href={item.path} className="text-4xl font-semibold">
                                {item.title}
                            </Link>


                            <div>{dayjs(item.published_at).format("MMMM DD, YYYY")}</div>
                        </div>
                    </div>
                </SwiperSlide>))}

        </Swiper>
    );

}