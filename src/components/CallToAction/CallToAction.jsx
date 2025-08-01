import React from 'react';
import { ReactComponent as PhoneIcon } from '../../assets/images/Call.svg';

const CallToAction = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-screen-xl mx-auto px-8 2xl:px-0">
        <div className="bg-stone-900 border border-neutral-800 p-12 relative">
          <div className="flex justify-between items-center">
            {/* Left Side */}
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-3xl font-bold font-['Manrope'] uppercase leading-10 max-w-md">
                Если ты готов пойти
                <br/>
                на службу и защитить Родину
              </h2>
              <p className="text-zinc-600 text-2xl font-bold font-['Manrope'] uppercase">
                оставь заявку ниже
              </p>
              <button className="mt-8 w-64 h-14 bg-red-600 text-white text-base font-medium font-['Manrope'] leading-snug hover:bg-red-700 transition-colors">
                Пойти на службу
              </button>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-stone-600 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-3xl font-bold font-['Manrope'] uppercase">
                    <span className="text-zinc-600">+7 (343)</span>
                    <span className="text-white"> 229-05-11</span>
                  </p>
                </div>
              </div>
               <div className="flex items-center gap-4">
                <div className="w-9 h-9 bg-stone-600 rounded-full flex items-center justify-center">
                   <PhoneIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-3xl font-bold font-['Manrope'] uppercase">
                    <span className="text-zinc-600">+7 (343)</span>
                    <span className="text-white"> 374-55-33</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-9 h-9 bg-stone-600 rounded-full flex items-center justify-center">
                    {/* Placeholder for 112 icon */}
                 </div>
                 <div>
                    <p className="text-white text-3xl font-bold font-['Manrope'] uppercase leading-relaxed">112, 117</p>
                    <p className="opacity-60 text-white text-lg font-normal font-['Manrope'] leading-tight">бесплатно по всей России</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
