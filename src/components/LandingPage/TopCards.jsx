import React from "react";
import  img1 from "../../assets/img1.png";
import  img2 from "../../assets/img2.png";
import  img3 from "../../assets/img3.png";
import  img4 from "../../assets/img4.png";
import  img5 from "../../assets/img5.png";
import  img6 from "../../assets/img6.png";
import { NavLink } from "react-router-dom";
const products = [
  {
    id: 1,
    title: "boAt Airdopes 181 Pro",
    price: "₹1,099",
    oldPrice: "₹4,990",
    discount: "78% off",
    rating: "4.7",
    tag: "New Launch",
    feature: "100 Hours Playback",
    img: img1,
  },
  {
    id: 2,
    title: "boAt Wave Fury",
    price: "₹1,399",
    oldPrice: "₹6,999",
    discount: "80% off",
    rating: "4.9",
    tag: "EXTRA ₹100 OFF",
    feature: "BT Calling",
    img: img2,
  },
  {
    id: 3,
    title: "boAt PartyPal 65 Pro",
    price: "₹4,799",
    oldPrice: "₹15,990",
    discount: "70% off",
    rating: "",
    tag: "New Launch",
    feature: "42W RMS Sound",
    img: img3,
  },
  {
    id: 4,
    title: "boAt Airdopes Prime 701 ANC",
    price: "₹1,799",
    oldPrice: "₹7,990",
    discount: "77% off",
    rating: "4.7",
    tag: "EXTRA ₹100 OFF",
    feature: "50 Hrs Playback",
    img: img4,
  },
  {
    id: 5,
    title: "boAt Rockerz 650 Pro",
    price: "₹2,799",
    oldPrice: "₹8,990",
    discount: "69% off",
    rating: "4.8",
    tag: "EXTRA ₹100 OFF",
    feature: "80 Hours Playback",
    img: img5,
  },
  {
    id: 6,
    title: "EnergyShroom PB300",
    price: "₹1,199",
    oldPrice: "₹2,999",
    discount: "60% off",
    rating: "4.6",
    tag: "Engraving Available",
    feature: "10000mAh Power Bank",
    img: img6,
  },
];

const TopCards = () => {
  return (
    <>
      {/* 🔥 Big Deals Section */}
      <div className="px-10 py-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            sale is <span className="border-b-2 border-red-500">live</span>
          </h2>
          <p className="text-blue-500 cursor-pointer">View All →</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 text-sm">
          <button className="bg-gray-200 px-4 py-1 rounded-full font-medium">
            All Deals
          </button>
          <button>True Wireless Earbuds</button>
          <button>Smartwatches</button>
          <button>Speakers</button>
          <button>Neckbands</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-6 gap-4">
          {products.map((item) => (
            <NavLink to={`/Product/${item.title}`}>
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className=" w-full relative bg-gray-100 rounded-t-xl">
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </span>

                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-t-xl w-full mx-auto object-contain"
                />
              </div>

              {/* Feature */}
              <div className="bg-yellow-400 flex justify-between px-2 py-1 text-xs font-medium">
                <span>{item.feature}</span>
                {item.rating && (
                  <span className="bg-white px-2 rounded">
                    ⭐ {item.rating}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="text-sm font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-lg font-bold">{item.price}</p>

                <div className="text-xs text-gray-500 flex gap-2">
                  <span className="line-through">{item.oldPrice}</span>
                  <span className="text-green-600 font-medium">
                    {item.discount}
                  </span>
                </div>
              </div>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopCards;