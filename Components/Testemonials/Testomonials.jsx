import { Swiper, SwiperSlide} from "swiper/react"

const Testemonials = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 16,
                    },
                  }}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Testemonials