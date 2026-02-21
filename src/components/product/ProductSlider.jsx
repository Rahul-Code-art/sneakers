// ProductSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./productcard.css";
import ProductData from "../../data/ProductData";
import Productcard from "./Productcard";



const ProductSlider = () => {
  return (
    <div className="product-slider-container">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1} // Mobile default
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5, // Desktop
          },
        }}
      >
       {ProductData.map((product) => (
  <SwiperSlide key={product.id}>
    <Productcard product={product} />
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;