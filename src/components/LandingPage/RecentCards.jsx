import React from "react";
import img23 from "../../assets/img23.png";
import img24 from "../../assets/img24.png";
import img25 from "../../assets/img25.png";
import img26 from "../../assets/img26.png";


const products = [
  {
    id: 1,
    title: "boAt Airdopes 181 Pro",
    price: "₹1,099",
    oldPrice: "₹4,990",
    discount: "78% off",
    img: img23,
  },
  {
    id: 2,
    title: "boAt Rockerz 255 Pro+",
    price: "₹999",
    oldPrice: "₹3,990",
    discount: "75% off",
    img: img24,
  },
  {
    id: 3,
    title: "boAt Airdopes 131",
    price: "₹899",
    oldPrice: "₹2,990",
    discount: "70% off",
    img: img25,
  },
  {
    id: 4,
    title: "boAt Watch Storm",
    price: "₹1,499",
    oldPrice: "₹5,990",
    discount: "80% off",
    img: img26,
  },

];

const RecentCard = () => {
  return (
    <div className="px-10 py-8">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        Recently Viewed
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4"
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-lg flex justify-center items-center h-40">
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-sm font-medium">
                {item.title}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-lg font-bold">
                  {item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  {item.oldPrice}
                </span>
              </div>

              <p className="text-green-600 text-sm">
                {item.discount}
              </p>

              {/* Button */}
              <button className="mt-3 w-full bg-black text-white py-2 rounded-full text-sm hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default RecentCard;