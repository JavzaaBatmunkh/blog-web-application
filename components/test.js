import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import "swiper/css/effect-cube"
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
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay, EffectCube]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
                delay:3500,
                disableOnInteraction:false,
            }}
            effect="cube" // Add this line to enable the cube effect
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='mb-8'
        >
            {articles.map((item, index) => (
                index > 1 &&
                <SwiperSlide key={item.id}>
                    <Image src={item.social_image} width={1200} height={1200} className="aspect-video object-cover bg-slate-600 w-full" />
                    <div className="absolute left-2 bottom-2 bg-slate-100 dark:bg-slate-600 flex flex-col card">
                        <div className="card-body">
                            <div className="badge badge-primary">{item.tag_list[0]}</div>
                            <Link href={item.path} className="md:text-4xl font-semibold text-2xl">
                                {item.title}
                            </Link>
                            <div>{dayjs(item.published_at).format("MMMM DD, YYYY")}</div>
                        </div>
                    </div>
                </SwiperSlide>))}

        </Swiper>
    );

}