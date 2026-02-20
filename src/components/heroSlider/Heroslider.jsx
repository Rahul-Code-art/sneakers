import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import images from "../../assets/images/images";
import "./heroslider.css"


const Heroslider = () => {
  return (
    <>
    <Swiper
  loop={true}
  navigation={true}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Navigation, Pagination, Autoplay]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src={images.hero1} alt="Hero 1" />
  </SwiperSlide>

  <SwiperSlide>
    <img src={images.hero2} alt="Hero 2" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={images.hero3} alt="Hero 3" />
  </SwiperSlide>
</Swiper>
    </>
  )
}

export default Heroslider
