import "swiper/css";
import "swiper/css/navigation";
import "./SwiiperCom.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/pagination";

import image from "@images/logo.png";
import image2 from "@images/7215f42e5883a64157f0aa3a4d1a866a.jpeg";
export default function SwiperCom() {
  return (
    <Swiper
      className="swiperHeader"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}>
      <SwiperSlide className="bg-black text-white d-flex position-relative">
        <div>
          <div>
            <img className="" src={image} />
            <span>iPhone 14 Series</span>
          </div>
          <div>
            <span>Up to 10% off Voucher</span>
          </div>
          <div>
            <button>Shop Now</button>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <img className="carousel__img" src={image2} alt="" />
      </SwiperSlide>
      <SwiperSlide className="bg-black text-white d-flex position-relative">
        <div>
          <div>
            <img className="" src={image} alt="" />
            <span>iPhone 14 Series</span>
          </div>
          <div>
            <span>Up to 10% off Voucher</span>
          </div>
          <div>
            <button>Shop Now</button>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <img className="carousel__img" alt="" src={image2} />
      </SwiperSlide>
      <SwiperSlide className="bg-black text-white d-flex position-relative">
        <div>
          <div>
            <img className="" alt="" src={image} />
            <span>iPhone 14 Series</span>
          </div>
          <div>
            <span>Up to 10% off Voucher</span>
          </div>
          <div>
            <button>Shop Now</button>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <img
          className="carousel__img"
          alt=""
          src={image2}
        />
      </SwiperSlide>
    </Swiper>
  );
}
