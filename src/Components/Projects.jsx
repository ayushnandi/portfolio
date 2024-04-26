import React from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import slide_image_1 from "../../public/assets/projects/pp.jpg";
import slide_image_2 from "../../public/assets/projects/Sneaker2.png";
import slide_image_3 from "../../public/assets/projects/PrePPT.png";
import slide_image_4 from "../../public/assets/projects/xd.png";
import slide_image_5 from "../../public/assets/projects/Sneaker.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function projects() {
  return (
    <div>
      <div className="pt-[3rem] ">
        <div className="PoppinsBold flex justify-center">
          <h1 className="text-white text-[2.3rem] m-[2rem]">Projects</h1>
        </div>
      </div>
      <div className="flex justify-center  items-center h-[65vh] mx-[9rem]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 6,
            depth: 300,
            modifier: 1,
            slideShadows: true,
            distance: 50,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container "
        >
          
          <SwiperSlide>
            <div className="bg-[#9da6b7] frame_swiper rounded-lg p-4">
              <img src={slide_image_3} alt="slide_image" />
              <p className="text-white pt-[5px] PoppinsRegular">
              <span className="PoppinsBold">PrePPT : </span>This website utilizes OpenAI's capabilities to create concise, appealing PPTs efficiently.
              </p>
              <div className="flex gap-[10px]">
              <button className="bg-[#353537] rounded-lg hover:bg-[#535353] text-white font-bold py-2 px-4 ">
                Demo
              </button>
              <button className="bg-white rounded-lg hover:bg-[#d1d1d1]  font-bold py-2 px-4 ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-lg text-[#1e2627] font-bold hover:underline"
              >GitHub
              </a>
              </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#252525] frame_swiper rounded-lg p-4">
              <img src={slide_image_1} className="" alt="slide_image" />
              <p className="text-white pt-[5px] PoppinsRegular">
              <span className="PoppinsBold">Portfolio : </span>ThisThis is a Portfolio website with react, Node Js, 
              </p>
              <div className="flex gap-[10px]">
              <button href="https://theuntitled-shoes-website.netlify.app/" className="bg-[#0b0b0b] rounded-lg hover:bg-[#404040] text-white font-bold py-2 px-4 ">
                Demo
              </button>
              <button className="bg-white rounded-lg hover:bg-[#d6d6d6] font-bold py-2 px-4 ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-lg text-[#252525] font-bold hover:underline"
              >GitHub
              </a>
              </button>
              </div>
            </div>
          </SwiperSlide>

              {/* Adobe XD  */}

          <SwiperSlide>
            <div className="bg-[#494949] frame_swiper rounded-lg p-4">
              <img src={slide_image_4} className="" alt="slide_image" />
              <p className="text-white pt-[5px] PoppinsRegular">
              <span className="PoppinsBold">Netflix design : </span>ThisDescription: This is the first project. Lorem ipsum dolor sit
                amet.
              </p>
              <div className="flex gap-[10px]">
              <button className="bg-[#ff4040] rounded-lg hover:bg-[#ff8585] text-white font-bold py-2 px-4 ">
                Demo
              </button>
              <button className="bg-white rounded-lg hover:bg-[#dddcdc]  font-bold py-2 px-4 ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-lg text-[#494949] font-bold hover:underline"
              >GitHub
              </a>
              </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#969696] frame_swiper rounded-lg p-4">
              <img src={slide_image_5} alt="slide_image" />
              <p className="text-white pt-[5px] PoppinsRegular">
              <span className="PoppinsBold">Random : </span>ThisDescription: This is the first project. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
              <div className="flex gap-[10px]">
              <button className="bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                Demo
              </button>
              <button className="bg-white rounded-lg hover:bg-blue-200  font-bold py-2 px-4 ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-lg text-blue-500 font-bold hover:underline"
              >GitHub
              </a>
              </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-[#969696] frame_swiper rounded-lg p-4">
              <img src={slide_image_2} alt="slide_image" />
              <p className="text-white pt-[5px] PoppinsRegular">
              <span className="PoppinsBold">TheUntitled : </span>ThisStatic E-Commers ,Shose Shopping website With Dynamic Design, Interactive with UI/UX
              </p>
              <div className="flex gap-[10px]">
              <button className="bg-[#3c3c3c] rounded-lg hover:bg-[#646464] text-white font-bold py-2 px-4 ">
                Demo
              </button>
              <button className="bg-white rounded-lg hover:bg-[#cbcbcb]  font-bold py-2 px-4 ">
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded-lg text-[#1c1c1c] font-bold hover:underline"
              >GitHub
              </a>
              </button>
              </div>
            </div>
          </SwiperSlide>


          {/* Add other SwiperSlides similarly */}
        </Swiper>
      </div>
      <div className=""></div>
    </div>
  );
}
