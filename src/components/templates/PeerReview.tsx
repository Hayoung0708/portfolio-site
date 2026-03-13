import SubTitle from "../atoms/SubTitle";
import ReviewCard from "../organisms/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { PEER_REVIEWS } from "@/constants/peerReview";

export default function PeerReview() {
    return (
        <div className="flex flex-col items-center mb-20 swiper-container">
            <SubTitle>PEER REVIEWS</SubTitle>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                }}
                className="relative left-0 w-screen swiper-wrapper"
            >
                {PEER_REVIEWS.map((r, i) => (
                    <SwiperSlide key={i}>
                        <ReviewCard review={r} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
