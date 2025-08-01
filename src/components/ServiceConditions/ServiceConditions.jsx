import React from 'react';

const ServiceConditions = () => {
  return (
    <div className="w-[1110px] inline-flex flex-col justify-start items-start gap-12">
      <div className="self-stretch h-28 justify-start text-brand-gray text-4xl font-bold font-['Manrope'] uppercase leading-[58px]">по контракту в ИМЕННЫЕ УРАЛЬСКИЕ ДОБРОВОЛЬЧЕСКИЕ БАТАЛЬОНы</div>
      <div className="self-stretch inline-flex justify-start items-center gap-7">
        <div className="w-[540px] h-80 relative">
          <div className="w-[540px] h-80 left-0 top-0 absolute border border-brand-gray" />
          <div className="w-28 h-9 left-[40px] top-[40px] absolute bg-brand-green" />
          <div className="left-[61px] top-[47px] absolute justify-start text-brand-white text-base font-bold font-['Manrope'] uppercase leading-snug">Условия</div>
          <div className="left-[40px] top-[101px] absolute inline-flex justify-start items-center gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="justify-start"><span className="text-brand-gray-light text-lg font-normal font-['Manrope'] leading-snug">Денежное довольствие </span><span className="text-brand-gray-light text-lg font-bold font-['Manrope'] leading-snug">от 204 000 рублей</span></div>
          </div>
          <div className="left-[40px] top-[143px] absolute inline-flex justify-start items-center gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-snug">Полный социальный пакет</div>
          </div>
          <div className="left-[40px] top-[185px] absolute inline-flex justify-start items-center gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-snug">Меры региональной социальной поддержки</div>
          </div>
          <div className="left-[40px] top-[227px] absolute inline-flex justify-start items-baseline gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="w-96 justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-relaxed">Ежегодный оплачиваемый проезд к месту проведения отпуска и обратно</div>
          </div>
        </div>
        <div className="w-[540px] h-80 relative">
          <div className="w-[540px] h-80 left-0 top-0 absolute border border-brand-gray" />
          <div className="left-[40px] top-[101px] absolute inline-flex justify-start items-center gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-snug">По возрасту - от 18 до 60 лет</div>
          </div>
          <div className="left-[40px] top-[143px] absolute inline-flex justify-start items-baseline gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="w-64 justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-relaxed">По образованию - не ниже основного общего (9 классов)</div>
          </div>
          <div className="left-[40px] top-[215px] absolute inline-flex justify-start items-baseline gap-3.5">
            <div className="w-2 h-2 bg-brand-green rounded-full" />
            <div className="w-96 justify-start text-brand-gray-light text-lg font-normal font-['Manrope'] leading-relaxed">По здоровью - категории годности «А», «Б», «В» (мед. переосвидетельствование)</div>
          </div>
          <div className="w-36 h-9 left-[40px] top-[40px] absolute bg-brand-green" />
          <div className="left-[61px] top-[47px] absolute justify-start text-brand-white text-base font-bold font-['Manrope'] uppercase leading-snug">требования</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceConditions;
