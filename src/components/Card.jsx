import React from "react";

function Card({ values, index, handleClick }) { // Corrected the function name
  const { image, profession, name, added } = values;
  return (
    <div className="mt-10">
      <div className="w-64 h-64 bg-slate-100 flex justify-center items-center rounded-md">
        <img src={image} alt={name} className="w-32 h-32 rounded-full" />
        <div className="ml-4">
          <h1 className="text-xl font-bold whitespace-nowrap">{name}</h1>
          <p className="text-gray-600">{profession}</p>
          <button onClick={() => handleClick(index)} className={`px-3 py-2 ${added === false ? "bg-blue-500" : "bg-green-500"} text-white rounded-md mt-10`}>
            {added ? "friend" : "connect"}  
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;