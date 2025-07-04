import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

import fachada from "../../assets/images/fachada.png";
import cozinha from "../../assets/images/cozinha.png";
import sala from "../../assets/images/sala.png";
import quarto from "../../assets/images/quarto.png";
import gourmet from "../../assets/images/gourmet.png";

const images = [
  { src: fachada, alt: "Fachada com elementos em madeira" },
  { src: cozinha, alt: "Cozinha com iluminação natural e artificial" },
  { src: sala, alt: "Sala com elementos clean e estilo contemporâneo" },
  { src: quarto, alt: "Quarto com sofisticação e leveza" },
  { src: gourmet, alt: "Espaço Gourmet com área verde para momentos em família" },
];

export default function Projects() {
  return (
    <div className="w-full bg-gradient-to-b from-white via-gray-100 to-white py-14 px-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        CONHEÇA NOSSOS <span className="text-blue-600">PROJETOS DE DESTAQUE</span>
      </h1>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={6000}
        modules={[Autoplay]}
        className="w-full max-w-7xl"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-64 sm:w-72 md:w-80 max-w-sm flex flex-col items-center"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-xl shadow-lg object-cover w-full hover:scale-105 transition-transform duration-500"
            />
            <p className="mt-4 text-center text-gray-700 italic font-medium px-2 text-sm sm:text-base">
              {image.alt}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


