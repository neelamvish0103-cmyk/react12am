import React from "react";
import img1 from "../assets/v1.png";
import img2 from "../assets/v2.png";
import img3 from "../assets/v3.png";
import img4 from "../assets/v4.png";
import img5 from "../assets/v5.png";
import img6 from "../assets/v6.png";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const data = [
  {
    id: 1,
    video: img1,
    productImg: p1,
    title: "boAt Airdopes 71",
    price: "₹1,799",
    oldPrice: "₹3,990",
    off: "55% off",
  },
  {
    id: 2,
    video: img2,
    productImg: p2,
    title: "boAt Airdopes 161 Pro",
    price: "₹1,499",
    oldPrice: "₹4,490",
    off: "67% off",
  },
  {
    id: 3,
    video: img3,
    productImg: p3,
    title: "boAt Nirvana Ion ANC",
    price: "₹1,699",
    oldPrice: "₹9,990",
    off: "83% off",
  },
  {
    id: 4,
    video: img4,
    productImg: p4,
    title: "boAt Rockerz 245 V2 Pro",
    price: "₹1,599",
    oldPrice: "₹3,490",
    off: "54% off",
  },
  {
    id: 5,
    video: img5,
    productImg: p5,
    title: "boAt Airdopes 131",
    price: "₹699",
    oldPrice: "₹2,990",
    off: "77% off",
  },
  {
    id: 6,
    video: img6,
    productImg: p6,
    title: "boAt Airdopes 100",
    price: "₹1,099",
    oldPrice: "₹3,490",
    off: "69% off",
  },
];

const VideoSection = () => {
  return (
    <div className="px-6 py-10 bg-white">

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        Join the <span className="underline decoration-red-500">Tribe</span>
      </h2>

      {/* Scroll Container */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">

        {data.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] bg-white rounded-xl shadow-sm border"
          >
            
            {/* Video/Image */}
            <div className="relative">
              <img
                src={item.video}
                alt=""
                className="w-full h-[300px] object-cover rounded-t-xl"
              />

              {/* Small product image */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-md shadow">
                <img
                  src={item.productImg}
                  alt=""
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="pt-10 pb-4 px-3 text-center">
              <h3 className="text-sm font-medium">{item.title}</h3>

              <div className="mt-2 text-sm">
                <span className="font-semibold">{item.price}</span>
                <span className="line-through text-gray-400 ml-2">
                  {item.oldPrice}
                </span>
                <span className="text-green-600 ml-2">
                  {item.off}
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default VideoSection;