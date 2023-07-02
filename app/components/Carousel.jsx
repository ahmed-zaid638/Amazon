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
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}

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



// brand
// :
// "One Plus"
// category
// :
// "phone electronics"
// description
// :
// "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471 Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9 Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max Battery & Charging: 5000 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor Special Features: Hyperboost gaming engine"
// id
// :
// "1"
// image
// :
// "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_UY218_.jpg"
// name
// :
// "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)"
// price
// :
// 32999
// ratings
// :
// 4.6



