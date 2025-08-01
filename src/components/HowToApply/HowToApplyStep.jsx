import React from 'react';

const HowToApplyStep = ({ stepNumber, title, description, buttonText, documentList }) => {
  return (
    <div className="w-full p-4 bg-zinc-900/10 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-b border-stone-500 backdrop-blur-[30px] flex justify-between items-start overflow-hidden">
      <div className="flex-1 flex justify-between items-start">
        <div className="w-96">
          <h3 className="text-white text-2xl font-bold font-['Manrope'] uppercase leading-loose">{stepNumber}. {title}</h3>
        </div>
        <div className="w-[641px]">
          {description && <p className="text-stone-300 text-base font-medium font-['Manrope'] leading-normal">{description}</p>}
          {documentList && (
            <ul className="text-stone-300 text-base font-medium font-['Manrope'] leading-normal list-disc list-inside">
              {documentList.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          )}
        </div>
        {buttonText && (
            <div className="relative w-64 h-14">
                <div className="absolute inset-0 bg-red-600" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-white" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-white" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-base font-medium font-['Manrope'] leading-snug">
                    {buttonText}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default HowToApplyStep;
