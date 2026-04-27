import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image_hero1 from "../../assets/hero-img1.png";
import image_hero2 from "../../assets/hero-img2.png";
import image_hero3 from "../../assets/hero-img3.png";
import image_hero4 from "../../assets/hero-img4.png";
import image_hero5 from "../../assets/hero-img5.png";
import image_hero6 from "../../assets/hero-img6.png";
const slides = [
  {
    id: 1,
    title: "NIRVANA 751 ANC",
    subtitle: "A Premium Audio Experience",
    desc: "Superior ANC | boAt Signature Sound",
    price: "₹2,999",
    code: "GRAB300",
    image: image_hero1,
  },
  {
    id: 2,
    title: "ROCKERZ 450",
    subtitle: "Feel the Bass",
    desc: "Immersive Sound | 15H Playback",
    price: "₹1,499",
    code: "ROCK100",
    image: image_hero2,
  },
  {
    id: 3,
    title: "ROCKERZ 450",
    subtitle: "Feel the Bass",
    desc: "Immersive Sound | 15H Playback",
    price: "₹1,499",
    code: "ROCK100",
    image: image_hero3,
  },
  {
    id: 4,
    title: "ROCKERZ 450",
    subtitle: "Feel the Bass",
    desc: "Immersive Sound | 15H Playback",
    price: "₹1,499",
    code: "ROCK100",
    image: image_hero4,
  },
  {
    id: 5,
    title: "ROCKERZ 450",
    subtitle: "Feel the Bass",
    desc: "Immersive Sound | 15H Playback",
    price: "₹1,499",
    code: "ROCK100",
    image: image_hero5,
  },
  {
    id: 6,
    title: "ROCKERZ 450",
    subtitle: "Feel the Bass",
    desc: "Immersive Sound | 15H Playback",
    price: "₹1,499",
    code: "ROCK100",
    image: image_hero6,
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  // ✅ AUTO SLIDE FIXED
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []); // ⚡ no warning now (slides is static)

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white z-50"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white z-50"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;