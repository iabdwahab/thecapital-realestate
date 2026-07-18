"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NewsGallery as NewsGalleryData } from "@/types/news";
import NewsVideoPlayer from "./NewsVideoPlayer";

interface GalleryItem {
  type: "image" | "video";
  src: string;
}

interface Props {
  data: NewsGalleryData;
}

export default function NewsGallery({ data }: Props) {
  const candidates: GalleryItem[] = [
    { type: "image", src: data.image_1 || "" },
    { type: "image", src: data.image_2 || "" },
    { type: "image", src: data.image_3 || "" },
    { type: "image", src: data.image_4 || "" },
    { type: "image", src: data.image_5 || "" },
    { type: "image", src: data.image_6 || "" },
    { type: "video", src: data.video_1 || "" },
    { type: "video", src: data.video_2 || "" },
  ];
  const items = candidates.filter((item) => Boolean(item.src));

  if (items.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="text-sub-heading text-primary mb-4">معرض الصور والفيديو</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        loop={items.length > 1}
        navigation={items.length > 1}
        pagination={items.length > 1 ? { clickable: true } : false}
        breakpoints={{
          640: { slidesPerView: items.length > 1 ? 2 : 1 },
        }}
        className="news-gallery-swiper rounded-card-radius"
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.type}-${index}`}>
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`صورة المعرض ${index + 1}`}
                width={600}
                height={360}
                className="border-secondary-light h-64 w-full rounded-xl border object-cover"
              />
            ) : (
              <NewsVideoPlayer
                src={item.src}
                className="border-secondary-light h-64 w-full rounded-xl border"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
