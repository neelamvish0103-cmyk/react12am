import React from "react";
import smartwatch from "../../assets/smartwatch.png";
import earbuds from "../../assets/earbuds.png";
import neckband from "../../assets/neckband.png";
import headphones from "../../assets/headphones.png";
import speaker from "../../assets/speaker.png";

const categories = [
  { id: 1, name: "Smartwatches", img: smartwatch },
  { id: 2, name: "Wireless Earbuds", img: earbuds },
  { id: 3, name: "Neckbands", img: neckband },
  { id: 4, name: "Headphones", img: headphones },
  { id: 5, name: "Wireless Speakers", img: speaker },
];

import  img1 from "../../assets/img1.png";
import  img2 from "../../assets/img2.png";
import  img3 from "../../assets/img3.png";
import  img4 from "../../assets/img4.png";
import  img5 from "../../assets/img5.png";
import  img6 from "../../assets/img6.png";
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

const RecentView = () => {
  return (

    
    <div className="px-6 py-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">
        Explore <span className="font-extrabold underline">Bestsellers</span>
      </h2>

      {/* Categories carousel */}
      <div className=" mt-10 flex gap-4 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col  h-70 w-60 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img 
              src={cat.img}
              alt={cat.name}
              className="w-full h-60 object-cover"
            />
            <p className="text-center text-sm font-medium py-3">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default RecentView;