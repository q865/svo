import React from 'react';
import flag from '../../assets/images/flag.png';

const NewVolunteers = () => {
  return (
    <div className="w-[1110px] mx-auto my-12">
      <div className="flex justify-between items-center">
        {/* Left part: Image */}
        <div className="w-1/4">
          <img src={flag} alt="Russian Flag" className="h-48" />
        </div>

        {/* Middle part: Text */}
        <div className="w-1/2 text-center">
          <div className="text-white text-7xl font-bold font-['Gilroy'] uppercase leading-[98px]">21 486 человек</div>
          <div className="text-zinc-600 text-2xl font-bold font-['Gilroy'] uppercase leading-[50px]">Новых добровольцев за день</div>
        </div>

        {/* Right part: Button */}
        <div className="w-1/4 flex justify-center">
          <div className="relative w-64 h-14">
            <div className="absolute inset-0 bg-red-600" />
            <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-white" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-base font-medium font-['Manrope'] leading-snug">
              Ты нужен родине
            </div>
          </div>
        </div>
      </div>
      <hr className="border-neutral-600 mt-12" />
    </div>
  );
};

export default NewVolunteers;
