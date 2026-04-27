import React from "react";
import  img1 from "../../assets/img1.png";
import  img2 from "../../assets/img2.png";
import  img3 from "../../assets/img3.png";
import  img4 from "../../assets/img4.png";
import  img5 from "../../assets/img5.png";
import  img6 from "../../assets/img6.png";


// Sample product data
const products = [
  {
    id: 1,
    title: "boAt Wave Sigma 3 Curv",
    subtitle: "Immersive Curved Display",
    price: 1499,
    originalPrice: 5999,
    discount: "75% off",
    img: img1,
    colors: 2,
    tag:"EXTRA ₹300 OFF",
  },
  {
    id: 2,
    title: "boAt Valour Watch 1R",
    subtitle: "AMOLED Display",
    price: 4499,
    originalPrice: 7999,
    discount: "44% off",
    img:img2,
    colors: 2,
    tag: "EXTRA ₹300 OFF",
  },
  {
    id: 3,
    title: "boAt Lunar Orbit 2",
    subtitle: '1.39" HD Display',
    price: 1999,
    originalPrice: 6999,
    discount: "71% off",
    img: img3,
    colors: 2,
    tag: "New Launch",
  },
  {
    id: 4,
    title: "Bassheads 901 Pro",
    subtitle: "Retractable Mic",
    price: 999,
    originalPrice: 2999,
    discount: "67% off",
    img: img4,
    colors: 0,
    tag: "New Launch",
  },
  {
    id: 5,
    title: "Energyshroom PB330 Pro Magnacharge",
    subtitle: "10000mAh Battery",
    price: 2799,
    originalPrice: 7999,
    discount: "65% off",
    img:img5,
    colors: 0,
    tag: "New Launch",
  },
  {
    id: 6,
    title: "Energyshroom PB600",
    subtitle: "27000mAh Battery",
    price: 2299,
    originalPrice: 5499,
    discount: "58% off",
    img: img6,
    colors: 1,
    tag: "New Launch",
  },
];

const TopPicks = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">
          Top Picks <span className="underline">For You</span>
        </h2>
        <button className="text-blue-600 flex items-center gap-1">
          View All &rarr;
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            {/* Tag */}
            {product.tag && (
              <div className="absolute m-2 bg-black text-white text-xs px-2 py-1 rounded">
                {product.tag}
              </div>
            )}

            {/* Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-contain bg-gray-100 roounded-2xl"
            />

            {/* Details */}
            <div className="p-3">
              <p className="text-xs font-medium text-yellow-500">{product.subtitle}</p>
              <h3 className="text-sm font-semibold mt-1">{product.title}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg">₹{product.price}</span>
                {product.colors > 0 && (
                  <span className="text-gray-500 text-xs">{`+${product.colors}`}</span>
                )}
              </div>
              <p className="text-xs text-green-600 line-through mt-1">
                ₹{product.originalPrice} {product.discount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;