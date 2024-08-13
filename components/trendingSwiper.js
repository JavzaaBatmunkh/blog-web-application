import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import 'swiper/css/zoom'

import dayjs from "dayjs";
import Link from "next/link";
export function TrendingSwiper() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        loadMore()
    }, []);


    function loadMore() {
        fetch(`https://dev.to/api/articles?top=10`)
            .then(response => { return response.json(); })
            .then((data) => {
                const newArticles = articles.concat(data)
                setArticles(newArticles)
                console.log(articles)
            });
    }

    return(
    <div>
        <h1 className="py-12 text-2xl font-bold">Trending</h1>
        <div className='mt-8 hidden md:block'>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
            spaceBetween={25}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            zoom={{ maxRatio: 2 }}


            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
        >
            {articles.map((item, index) => (
                index > 1 &&
                <SwiperSlide key={item.id}>
                    <div className="group card bg-base-100 border-2 border-gray image-full " >
                        <figure>
                            <Image src={item.social_image} width={500} height={500} className="aspect-[1/1] object-cover" />
                        </figure>
                        <div className="card-body font-bold justify-end ">
                            <div className="flex gap-4 flex-wrap">
                                <div className="badge badge-primary text-white">{item.tag_list[0]}</div>
                            </div>
                            <Link href={item.path} className="text-white h-[20px] overflow-hidden transition-all duration-1000 group-hover:h-[70px]">
                                {item.title}
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>))}

        </Swiper>
        </div>
        <div className="block md:hidden">
            <div className="carousel w-full rounded-xl">
                {articles.map((item, index) => (
                    index < 4 &&
                    <div id={`item${index}`} className="carousel-item w-full relative" key={item.id}>
                        <div className="relative w-full">
                            <Image src={item.social_image} width={600} height={500} className="aspect-video object-cover w-full" />
                            <div className="absolute  inset-0 bg-[#141624] opacity-50"></div>
                        </div>

                        <div className="absolute left-2 bottom-2 flex flex-col ">
                            <div className="card-body">
                                <div className="badge badge-primary">{item.tag_list[0]}</div>
                                <Link href={item.path} className="text-2xl font-semibold text-white ">
                                    {item.title}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>)


}