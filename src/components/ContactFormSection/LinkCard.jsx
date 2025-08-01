import React from 'react';

const ArrowIcon = () => (
  <div className="w-9 h-9 bg-brand-red flex items-center justify-center">
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const LinkCard = ({ title, linkText }) => {
  return (
    <div className="w-80 h-48 p-6 bg-brand-gray-darker border border-brand-gray-dark flex flex-col justify-between">
      <h3 className="text-brand-white text-base font-bold font-['Gilroy'] uppercase leading-normal">
        {title}
      </h3>
      <a href="#" className="inline-flex justify-start items-center gap-4 group">
        <span className="text-brand-white text-sm font-medium font-['Manrope'] leading-snug group-hover:text-brand-red transition-colors">
          {linkText}
        </span>
        <ArrowIcon />
      </a>
    </div>
  );
};

export default LinkCard;
