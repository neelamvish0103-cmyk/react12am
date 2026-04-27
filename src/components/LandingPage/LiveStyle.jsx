import React from 'react';
const lifestyles = [
  { 
    title: "For Fitness", 
    img: "https://www.boat-lifestyle.com/cdn/shop/files/jemmi_d1dd51d5-8b8b-47ad-9920-f8594669cbb2_429X322.png?v=1726059408", 
    bgColor: "bg-[#dae2e7]" 
  },
  { 
    title: "For Parties", 
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Ranveer_429X322.png?v=1726038549", 
    bgColor: "bg-[#f2efe2]" 
  },
  { 
    title: "For Work", 
    img: "https://www.boat-lifestyle.com/cdn/shop/files/Aman_429X322.png?v=1726038424", 
    bgColor: "bg-[#dae2e7]" 
  },
  { 
    title: "For Audiophiles", 
    img: "https://www.boat-lifestyle.com/cdn/shop/files/YJ_429X322.png?v=1726059363", 
    bgColor: "bg-[#dae2e7]" 
  },
  
];
const LifeStyle = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-normal text-gray-900">
          Shop by <span className="font-bold underline decoration-red-600 underline-offset-8">Lifestyle</span>
        </h2>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {lifestyles.map((item, index) => (
          <div key={index} className="flex flex-col cursor-pointer group">
            
            {/* The Arch Container (Curved top, flat bottom) */}
            <div className={`relative aspect-[10/13] ${item.bgColor} rounded-t-[150px] overflow-hidden flex items-end justify-center`}>
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Info Section */}
            <div className="bg-[#f2f5f9] py-4 rounded-b-xl text-center">
              <h3 className="font-bold text-lg text-black mb-1">{item.title}</h3>
              <div className="flex items-center justify-center gap-1 text-blue-600 font-bold text-sm">
                View All 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default LifeStyle;
