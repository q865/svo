import React from 'react';

const AdvantageCard = ({ children }) => {
  return (
    <div className="relative w-64 h-48 p-4 bg-zinc-900/20 rounded-sm outline outline-1 outline-stone-700 backdrop-blur-sm flex flex-col justify-center">
      <div className="self-stretch">
        {children}
      </div>
    </div>
  );
};

export default AdvantageCard;
