import React from "react";

const InfoCard = ({ icon, title, description }: any) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg w-80">
      {/* Icon Section */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
        {icon}
      </div>

      {/* Details Section */}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
