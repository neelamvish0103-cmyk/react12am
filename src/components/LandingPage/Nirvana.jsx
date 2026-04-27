import React from "react";
import  img7 from "../../assets/img7.png";
import  img8 from "../../assets/img8.png";
import  img9 from "../../assets/img9.png";
import  img10 from "../../assets/img10.png";
import  img11 from "../../assets/img11.png";
import  img12 from "../../assets/img12.png";


import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";
import img17 from "../../assets/img17.png"; 
import img18 from "../../assets/img18.png";
import img19 from "../../assets/img19.png";
import img20 from "../../assets/img20.png";
import img21 from "../../assets/img21.png";
import img22 from "../../assets/img22.png"; 
const products = [
  {
    id: 1,
    title: "boAt Airdopes 181 Pro",
    price: "₹1,099",
    oldPrice: "₹4,990",
    discount: "78% off",
    rating: "4.7",
    tag: "New Launch",
    feature:"BT Calling",
    img: img7,
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
    img: img8,
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
    img: img9,
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
    img: img10,
  },
  {
    id: 5,
    title: img10,
    price: "₹2,799",
    oldPrice: "₹8,990",
    discount: "69% off",
    rating: "4.8",
    tag: "EXTRA ₹100 OFF",
    feature: "80 Hours Playback",
    img: img11,
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
    img: img12,
  },
];

// ✅ Images array for img13 to img22
const images = [
  img13, img14, img15, img16, img17, img18, img19, img20, img21, img22
];

const Nirvana = () => {
  return (
    <>
      {/* 🔥 Explore Nirvana Section */}
      <div className="flex flex-col h-50 w-full">
        <h1 className="text-3xl mt-7 ml-10">
          Explore <strong>Nirvana</strong>
        </h1>
        <img
          src="https://www.boat-lifestyle.com/cdn/shop/files/Strips_a756e689-891e-4459-a006-de3a9dd98014_1600x.png"
          className="ml-10 mt-7 h-30 rounded-2xl w-[90%]"
          alt="banner"
        />
      </div>

      {/* 🔥 Big Deals Section */}
      <div className="px-10 py-2 mt-10">
        {/* Heading */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Big <span className="border-b-2 border-red-500">Deals</span>
          </h2>
          <p className="text-blue-500 cursor-pointer">View All →</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mt-5 text-sm">
          <button className="bg-gray-200 px-4 py-1 rounded-full font-medium">
            All Deals
          </button>
          <button>True Wireless Earbuds</button>
          <button>Smartwatches</button>
          <button>Speakers</button>
          <button>Neckbands</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-6 gap-4 mt-7">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full bg-gray-100 rounded-t-xl p-3">
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {item.tag}
                </span>

                <img
                  src={item.img}
                  alt={item.title}
                  className="h-32 w-full mx-auto object-contain"
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
          ))}
        </div>
      </div>

      {/* Shop by Categories Section */}
<div className="py-10 px-5 bg-white">
  <div className="flex justify-between items-center mb-5">
    <h2 className="text-2xl font-semibold">
      Shop <span className="border-b-2 border-red-500">by Categories</span>
    </h2>
    <a href="#" className="text-blue-700 flex items-center">
      View All <span className="ml-1">→</span>
    </a>
  </div>

  <div className=" mt-15 grid grid-cols-5 md:grid-cols-10 gap-6 justify-items-center">
    <div className="flex flex-col items-center text-center">
      <img src={img13} alt="True Wireless Earbuds" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">True Wireless Earbuds</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img14} alt="Neckbands" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Neckbands</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img15} alt="Smart Watches" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Smart Watches</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img16} alt="Nirvana" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Nirvana</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img17} alt="Wireless Headphones" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Wireless Headphones</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img18} alt="Wireless Speakers" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Wireless Speakers</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img19} alt="Dashcams" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Dashcams</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img20} alt="Gaming Headphones" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Gaming Headphones</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img21} alt="Soundbars" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Soundbars</p>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={img22} alt="Wired Headphones" className="w-16 h-16 object-contain mb-2" />
      <p className="text-sm font-medium">Wired Headphones</p>
    </div>
  </div>
</div>
    </>
  );
};

export default Nirvana;