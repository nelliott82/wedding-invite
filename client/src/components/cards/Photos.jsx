import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// const photos = new Array(20).fill(0);
const photos = ['https://i.postimg.cc/yWHNZty9/1.jpg',
                'https://i.postimg.cc/dhLQFYJM/2.jpg',
                'https://i.postimg.cc/dDjVm65f/3.jpg',
                'https://i.postimg.cc/ZW2bKMqW/4.jpg',
                'https://i.postimg.cc/1fR5WFT3/5.jpg',
                'https://i.postimg.cc/w7Wxnv8c/6.jpg',
                'https://i.postimg.cc/ftjDCWfd/7.jpg',
                'https://i.postimg.cc/FfS9fVfD/8.jpg',
                'https://i.postimg.cc/k6d7WRK9/9.jpg',
                'https://i.postimg.cc/PvXhRGSR/10.jpg',
                'https://i.postimg.cc/NLDQrMMq/11.jpg',
                'https://i.postimg.cc/9rfCPhR4/12.jpg',
                'https://i.postimg.cc/7fQDmW0K/13.jpg',
                'https://i.postimg.cc/HrqmC8S5/14.jpg',
                'https://i.postimg.cc/bZDPM9Rp/15.jpg',
                'https://i.postimg.cc/kVWmMMZH/16.jpg',
                'https://i.postimg.cc/jwKrD0YS/17.jpg',
                'https://i.postimg.cc/4nfgZg18/18.jpg',
                'https://i.postimg.cc/hQtW0LjF/19.jpg',
                'https://i.postimg.cc/5Y3Wv7fq/20.jpg']

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