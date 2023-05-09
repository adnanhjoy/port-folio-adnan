import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import person1 from '../../assets/review/person1.jpg';
import person2 from '../../assets/review/person2.jpg';
import person3 from '../../assets/review/person3.jpg';
import './ReviewCarousel.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewCarousel = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])

    return (
        <div data-aos="fade-up" className='review-bg'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-11/12 m-auto">
                        <img src={person1} className=" w-28 h-28 rounded-full mt-16 m-auto" />
                        <p className='my-10 md:w-1/2 m-auto text-center text-white'>He was great! I needed him to duplicate a website I had already made  he did exactly that + better! He also added more intricate stuff “behind the scenes” of my website to make it run more efficiently. Will definitely keep him around to work on my website for me!!</p>
                        <p className='text-center text-orange-500 font-bold mb-20'>Ryan Waltez</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-11/12 m-auto">
                        <img src={person2} className="w-28 h-28 rounded-full mt-16 m-auto" />
                        <p className='my-10 md:w-1/2 m-auto text-center text-white'>Adnan is the best provider of WordPress services I have ever dealt with, I've worked with him for years and he is sincerer, clever, determined and absolutely wonderful to work with. Thank you again for your tremendous work Adnan.</p>
                        <p className='text-center text-orange-500 font-bold mb-20'>Joe Smith</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-11/12 m-auto">
                        <img src={person3} className="w-28 h-28 rounded-full mt-16 m-auto" />
                        <p className='my-10 md:w-1/2 m-auto text-center text-white'>It was an absolute pleasure to work with Adnan. He went above and beyond with all the resources and value he added to the hashtag growth strategy package. I feel more than prepared with a more solid understanding of my growth strategy.</p>
                        <p className='text-center text-orange-500 font-bold mb-20'>Lisa Jones</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ReviewCarousel;