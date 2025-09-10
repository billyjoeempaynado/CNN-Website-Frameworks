"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function TraderSection() {
  const traders = [
    { img: "Lucilo-Oh.jpg", name: "Lucilo Oh" },
    { img: "Baltazar-Badillo.jpg", name: "Baltazar Badillo" },
    { img: "Christian-Aaron-Lee.jpg", name: "Christian Aaron Lee" },
    { img: "Jesley-Tan-Uy.jpg", name: "Jesley Tan Uy" },
    { img: "Edward-Lim.jpg", name: "Edward Lim" },
    { img: "Gabriel-Igot.jpg", name: "Gabriel Igot" },
    { img: "Anne-Maria-Pua-Sy.jpg", name: "Ann Marie Pua" },
    { img: "John-Kevin-Ong.jpg", name: "John Kevin Ong" },
    { img: "Eduardo-Siy.jpg", name: "Eduardo Siy" },
    { img: "Joven-Mateo.jpg", name: "Joven Mateo" },
    { img: "Kevin-Duane-See.jpg", name: "Kevin Duane See" },
    { img: "Marke-Arellano.jpg", name: "Marke Arellano" },
    { img: "Michael-Chua.jpg", name: "Michael Chua" },
    { img: "President.jpg", name: "Georgie Cabo Cheng" },
    { img: "Rafael_Munoz_Gray.PNG", name: "Rafael Munoz" },
    { img: "Charles-Chua.jpg", name: "Charles Chua" },
    { img: "Janet_CaboCheng_Gray.PNG", name: "Janet Cabocheg" },
    { img: "Wilfred-Uy.jpg", name: "Wilfred Uy" },
    { img: "Christopher-Guzman.jpg", name: "Christopher Guzman" },
    { img: "Julie_Go_Gray.PNG", name: "Julie Cua Go" },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-center mb-10 text-gray-900 dark:text-gray-100">
        Our Traders
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-10"
      >
        {traders.map((trader, i) => (
          <SwiperSlide key={i}>
            <div
              className="mt-10 mb-10 bg-white dark:bg-gray-800 shadow rounded-lg p-4 text-center 
                         transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Image
                src={`/assets/${trader.img}`}
                alt={trader.name}
                width={150}
                height={150}
                className="rounded-full mx-auto transition-transform duration-300 hover:scale-110"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Trader</p>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {trader.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
