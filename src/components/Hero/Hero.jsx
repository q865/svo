import React from 'react';
import heroBg from '../../assets/images/bg2.png';
import smokeImg from '../../assets/images/smoke.png';
import soldersImg from '../../assets/images/solders.png';

const InfoCard = ({ title, value }) => (
    <div className="p-4 bg-zinc-900/10 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-stone-500 backdrop-blur-[30px] flex flex-col justify-start items-start gap-2 overflow-hidden">
        <div className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">{title}</div>
        <div className="font-['Manrope'] uppercase">
            <span className="text-zinc-100 text-base font-extrabold leading-tight">{value.split(' ')[0]}</span>
            <span className="text-zinc-100 text-2xl font-extrabold leading-tight"> {value.substring(value.indexOf(' ') + 1)}</span>
        </div>
    </div>
);

const FreebieCard = () => (
    <div className="p-4 bg-zinc-900/10 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-stone-500 backdrop-blur-[30px] flex flex-col justify-start items-start gap-3 overflow-hidden">
        <div className="self-stretch justify-start font-['Manrope'] leading-tight">
            <span className="text-stone-300 text-base font-medium">Проезд, проживание и питание по пути в пункт отбора — </span>
            <span className="text-stone-300 text-base font-extrabold">бесплатно</span>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div className="flex-1 h-0.5 bg-white" />
            <div className="flex-1 h-0.5 bg-stone-500" />
            <div className="flex-1 h-0.5 bg-stone-500" />
        </div>
    </div>
);

const Hero = () => {
  return (
    <div className="relative w-full h-[713px] bg-neutral-900 overflow-hidden font-['Manrope']">
      {/* Backgrounds and overlays */}
      <img className="absolute w-full h-full top-0 left-0 object-cover" src={heroBg} alt="Background" />
      <div className="absolute w-full h-full top-0 left-0 bg-neutral-900/90" />
      <img className="absolute w-full h-[597px] left-0 top-[116px] mix-blend-lighten" src={smokeImg} alt="Smoke overlay" />
      
      {/* Soldiers */}
      <img className="absolute h-[597px] left-1/2 -translate-x-1/2 top-[116px] object-cover" src={soldersImg} alt="Soldiers" />

      {/* Blurred shapes for effect */}
      <div className="w-80 h-80 left-[697px] top-[339px] absolute bg-neutral-700/60 rounded-full blur-[200px]" />
      <div className="w-80 h-80 left-[1046px] top-[372px] absolute bg-neutral-700/60 rounded-full blur-[200px]" />

      {/* Main Content Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center px-8 2xl:px-0">
          
          {/* Left CTA Block */}
          <div className="w-80 p-6 bg-zinc-900/10 rounded-sm shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-1px] outline-stone-500 backdrop-blur-[30px] flex flex-col justify-start items-start gap-8">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch text-white text-4xl font-bold uppercase leading-9">Заключи контракт <br/>на СВО</div>
              <div className="self-stretch text-zinc-600 text-xl font-bold uppercase leading-normal">Служба по контракту <br/>в ВС РФ</div>
            </div>
            <button className="w-full h-14 bg-red-600 border border-transparent text-white text-base font-medium leading-snug hover:bg-red-700 transition-colors">
              Заключить контракт
            </button>
          </div>

          {/* Right Info Block */}
          <div className="w-64 flex flex-col justify-start items-stretch gap-4">
            <InfoCard title="Списание кредитов:" value="до 10 МЛН. ₽" />
            <InfoCard title="Единовременная выплата при заключении контракта:" value="от 3 100 000 ₽" />
            <InfoCard title="Ежемесячные выплаты:" value="от 210 000 ₽" />
            <FreebieCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
