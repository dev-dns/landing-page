import { Head } from "@inertiajs/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import About from "@/Layouts/About";
import Home from "@/Layouts/Home";

export default function Page() {
  return (
    <>
      <Head title="Home Page" />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: false,
        }}
        speed={1500}
        modules={[Mousewheel, Pagination]}
        className="swiper h-[100dvh]"
      >
        <SwiperSlide className="h-[100dvh] w-full">
          <Home />
        </SwiperSlide>
        <SwiperSlide className="h-[100dvh] w-full">
          <About />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
