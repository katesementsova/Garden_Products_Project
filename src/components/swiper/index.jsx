// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./index.module.css";

// // import required modules
// import { Pagination, Navigation, Mousewheel } from "swiper/modules";

// export default function SwiperComponent() {
//   const list = [
//     "http://localhost:3333/product_img/1.jpeg",
//     "http://localhost:3333/product_img/2.jpeg",
//     "http://localhost:3333/product_img/3.jpeg",
//     "http://localhost:3333/product_img/4.jpeg",
//     "http://localhost:3333/product_img/5.jpeg",
//   ];

//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {list.map((img, ind) => (
//           <SwiperSlide key={ind}>
//             <img src={img} alt={img} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }
