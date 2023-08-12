import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

const photos = ['https://i.postimg.cc/T2y5ZXyk/1.jpg',
                'https://i.postimg.cc/bwRZQyMv/2.jpg',
                'https://i.postimg.cc/MZhfwrVz/3.jpg',
                'https://i.postimg.cc/q7MzQfVx/4.jpg',
                'https://i.postimg.cc/dtrkVmjr/5.jpg',
                'https://i.postimg.cc/VkwSrrKT/6.jpg',
                'https://i.postimg.cc/C195FzZc/7.jpg',
                'https://i.postimg.cc/zft3cdqZ/8.jpg',
                'https://i.postimg.cc/rmDzXSpd/9.jpg',
                'https://i.postimg.cc/Wzr3tTgT/10.jpg',
                'https://i.postimg.cc/ncbrg9fz/11.jpg',
                'https://i.postimg.cc/nc4rJVn1/12.jpg',
                'https://i.postimg.cc/cLdH4qHG/13.jpg',
                'https://i.postimg.cc/1zt3wpwW/14.jpg',
                'https://i.postimg.cc/CxJKRvBB/15.jpg',
                'https://i.postimg.cc/vmNHzcvG/16.jpg',
                'https://i.postimg.cc/26LjXrHh/17.jpg',
                'https://i.postimg.cc/59vNB9QM/18.jpg',
                'https://i.postimg.cc/C5jhSJpK/19.jpg',
                'https://i.postimg.cc/sxFjkq88/20.jpg']

export default function Photos({ text }) {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
        {photos.map((x, i) =>
          <SwiperSlide key={i}>
            <img src={x}/>
          </SwiperSlide>
        )}
      </Swiper>
      <br/>
      <p className='font-["Arial"] max-md:text-[1.1rem]'>{text.linkText}
      </p>
      <div className='flex flex-wrap justify-evenly content-evenly pt-[1rem] font-["Arial"] max-md:text-[1.1rem]'>
        <img className='h-[3rem] w-[3rem]' src='./assets/insta.png'></img>
        <a className='self-center' href='https://www.instagram.com/explore/tags/perlanikko/' target='_blank'> <u>#PerlaNikko</u>
        </a>
      </div>
    </>
  );
}