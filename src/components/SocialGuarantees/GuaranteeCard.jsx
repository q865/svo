import React from 'react';

const GuaranteeCard = ({ children, highlighted = false }) => {
  const cardClasses = `
    w-80 h-40 p-5 
    outline outline-1 outline-offset-[-1px] outline-brand-gray-medium
    flex justify-start items-start gap-2.5
    ${highlighted ? 'bg-brand-green' : ''}
  `;

  return (
    <div className={cardClasses}>
      <div className="w-72 justify-start text-brand-white text-sm font-medium font-['Manrope'] leading-normal">
        {children}
      </div>
    </div>
  );
};

export default GuaranteeCard;
