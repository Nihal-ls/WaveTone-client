"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { LuQuote, LuStar, LuChevronLeft, LuChevronRight } from "react-icons/lu";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Alex Rivers",
    role: "Music Producer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    text: "The clarity of the recording gear I bought from WaveTone is unmatched. My studio setup finally feels complete.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Touring Guitarist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    text: "WaveTone's delivery was so fast. My Strat arrived perfectly tuned and set up right out of the box. Incredible service!",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Vibe",
    role: "Beatmaker",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    text: "Best price for analog synths on the market. The student discount helped me start my home studio journey.",
    rating: 5,
  },
  {
    id: 4,
    name: "Elena Rossi",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
    text: "Their support crew knows their stuff. They helped me pick the perfect interface for my specific recording needs.",
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-24 px-6 bg-base-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Artist <br /> <span className="text-primary italic">Feedback</span>
            </h2>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-2">
            <button className="btn btn-circle btn-outline border-base-300 hover:btn-primary prev-btn">
              <LuChevronLeft size={24} />
            </button>
            <button className="btn btn-circle btn-outline border-base-300 hover:btn-primary next-btn">
              <LuChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card bg-base-200 border border-base-300 p-8 rounded-[3rem] h-full flex flex-col justify-between group hover:border-primary/40 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <LuQuote className="text-primary opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
                    <div className="flex gap-1 text-warning">
                      {[...Array(review.rating)].map((_, i) => (
                        <LuStar key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium leading-relaxed italic text-base-content/80">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-base-300/50">
                  <div className="avatar">
                    <div className="w-14 rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img src={review.image} alt={review.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight text-base-content">{review.name}</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}