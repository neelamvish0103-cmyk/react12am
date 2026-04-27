import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const blogs = [
  {
    id: 1,
    img: img1,
    date: "21 Mar, 2024",
    title: "Gaming Earbuds for Travel: Compact and Portable Gaming Solutions",
    desc: "When nothing can stop a gamer from entering the arena, we have got gaming earbuds so they...",
  },
  {
    id: 2,
    img: img2,
    date: "08 Mar, 2024",
    title: "How To Create Watch Faces Using The Watch Face Studio",
    desc: "Why stick to a few watch faces on your smartwatch when you can many. Check out our...",
  },
  {
    id: 3,
    img: img3,
    date: "13 Mar, 2024",
    title: "ANC for Work: How Noise-Cancelling Headphones Can Boost Productivity",
    desc: "Noise at the workplace can become annoying sometimes. Don't worry, we have a have a one...",
  },
  {
    id: 4,
    img: img4,
    date: "27 Feb, 2024",
    title: "Best Dolby Soundbars for an Immersive Home Theatre Experience",
    desc: "Turn your movie nights into unforgettable cinematic experiences with the best Dolby...",
  },
];

const Blogs = () => {
  return (
    <div className="px-6 py-10 bg-gray-50">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <p className="text-sm text-blue-600 cursor-pointer">View All →</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="bg-gray-200 px-4 py-1 rounded-full text-sm font-medium">
          Popular
        </button>
        <button className="text-gray-500 text-sm font-medium">
          Latest
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <p className="text-xs text-gray-500 mb-2">{item.date}</p>

              <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                {item.desc}
              </p>

              <button className="w-full border border-gray-300 py-2 rounded-full text-sm hover:bg-gray-100">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Press Section */}
      <div className="mt-12 grid md:grid-cols-2 gap-6 bg-gray-100 p-6 rounded-xl items-center">
        
        {/* Left */}
        <div className="flex justify-center items-center bg-gray-200 h-40 rounded-lg">
          <h1 className="text-xl font-bold text-blue-500">
            BW <span className="text-gray-700">BUSINESSWORLD</span>
          </h1>
        </div>

        {/* Right */}
        <div className="text-center md:text-left">
          <p className="text-4xl text-gray-400">“</p>
          <p className="text-gray-600 text-sm leading-relaxed">
            boAt is the first company from the consumer lifestyle electronics 
            industry to collaborate with the ICEA to bring out the Indigenous IP.
          </p>

          {/* Arrows */}
          <div className="flex gap-3 mt-4 justify-center md:justify-start">
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
              ◀
            </button>
            <button className="w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
              ▶
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blogs;