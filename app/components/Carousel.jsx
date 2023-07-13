'use client'
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay  , Navigation} from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css';
function Carousel({ products }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay , Navigation]}
        className="mySwiper"
        breakpoints={{

          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

        }}
      >
        {
          products.map((product, index) => {
            return (
              <>
                <SwiperSlide>
                  <Card id={product.id} image={product.image} price={product.price} name={product.name} />
                </SwiperSlide>
              </>
            )
          }
          )
        }
      </Swiper>
    </>
  );
};

export default Carousel



