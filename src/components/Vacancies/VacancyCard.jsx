import React from 'react';

const VacancyCard = ({ image, title, salary, active = false }) => {
  return (
    <div className="w-80 bg-stone-900 outline outline-1 outline-offset-[-1px] outline-stone-500 overflow-hidden group">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt={title} />
      </div>
      <div className="p-5 flex flex-col gap-6">
        <h3 className="text-white text-2xl font-semibold font-['Manrope'] uppercase leading-relaxed h-14">
          {title}
        </h3>
        <div className="flex flex-col gap-0.5">
          <p className="text-neutral-400 text-base font-bold font-['Manrope'] uppercase leading-snug">в месяц:</p>
          <p>
            <span className="text-zinc-100 text-base font-extrabold font-['Manrope'] uppercase leading-none">ДО </span>
            <span className="text-zinc-100 text-2xl font-extrabold font-['Manrope'] uppercase leading-normal">{salary}</span>
          </p>
        </div>
      </div>
      <button className={`w-full px-10 py-5 inline-flex justify-between items-center transition-colors ${active ? 'bg-red-600' : 'bg-neutral-900 group-hover:bg-red-700'}`}>
        <span className="text-white text-base font-medium font-['Manrope'] leading-snug">Оставить заявку</span>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default VacancyCard;
