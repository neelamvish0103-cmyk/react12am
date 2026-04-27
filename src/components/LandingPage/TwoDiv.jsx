import React from "react";

import { Truck, RotateCcw, FileText, ShieldCheck } from "lucide-react";

const TwoDiv = () => {
  return (
    <div className="w-full">

      {/* Top Yellow Bar */}
      <div className="bg-yellow-400 text-sm py-2 px-4 flex justify-between items-center overflow-x-auto">
        <div className="flex items-center gap-6 whitespace-nowrap">
          <span>0% EMI on UPI</span>
          <span>• Powered by Snapmint</span>
          <span>• IndusInd Bank</span>
          <span>• YES Bank</span>
          <span>• Powered by TWI</span>
        </div>
      </div>

      {/* Bottom Features Row */}
      <div className="bg-gray-100 py-4 px-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        
        {/* Item 1 */}
        <div className="flex items-center justify-center gap-3">
          <ShieldCheck className="w-6 h-6 text-gray-700" />
          <div className="text-left">
            <p className="font-semibold text-sm">12+3 Months</p>
            <p className="text-xs text-gray-500">Warranty</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-center gap-3">
          <FileText className="w-6 h-6 text-gray-700" />
          <div className="text-left">
            <p className="font-semibold text-sm">GST</p>
            <p className="text-xs text-gray-500">Billing</p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-center gap-3">
          <Truck className="w-6 h-6 text-gray-700" />
          <div className="text-left">
            <p className="font-semibold text-sm">Free Express</p>
            <p className="text-xs text-gray-500">Delivery*</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex items-center justify-center gap-3">
          <RotateCcw className="w-6 h-6 text-gray-700" />
          <div className="text-left">
            <p className="font-semibold text-sm">7-day</p>
            <p className="text-xs text-gray-500">Replacement</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TwoDiv;