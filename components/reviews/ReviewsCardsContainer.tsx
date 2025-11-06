"use client";

import ReviewsCard from "./ReviewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ReviewsCardsContainer() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={12}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="reviews-swiper"
    >
      <SwiperSlide>
        <ReviewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewsCard />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewsCard />
      </SwiperSlide>
    </Swiper>
  );
}
