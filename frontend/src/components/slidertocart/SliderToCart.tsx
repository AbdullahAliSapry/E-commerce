import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./SliderToCart.module.css";
import React, { ReactNode } from "react";
const { swiperProduct } = styles;

// type com={
//   SwiperThing: React.FC<{
//     name?: string | null | undefined;
//     classNameToi?: string | null;
//     showDiscount?: boolean | null;
//   }>;
//   name?: string | null;
//   classNameToi?: string | null;
//   showDiscount?: boolean | null;
// }

export default function SliderToCart({
  SwiperThing,
}: {
  SwiperThing: ReactNode[];
}) {
  return (
    <div className="my-5">
      <div className={swiperProduct}>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            991: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}>
          {SwiperThing.length > 0 &&
            [...Array(SwiperThing.length)].map((item, index) => {
              return (
                <SwiperSlide key={`prod-list-${index}`}>
                  {SwiperThing[index]}
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
