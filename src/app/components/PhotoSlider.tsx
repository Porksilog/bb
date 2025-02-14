"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// You should replace these with actual 1080x1080 photos of your girlfriend
const photos = [
  "/images/us.jpg?height=1080&width=1080",
]

export default function PhotoSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full aspect-square rounded-lg overflow-hidden"
    >
      {photos.map((photo, index) => (
        <SwiperSlide key={index}>
          <img src={photo || "/placeholder.svg"} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

