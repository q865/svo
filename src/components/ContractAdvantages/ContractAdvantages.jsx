import React from 'react';
import AdvantageCard from './AdvantageCard';
import { ReactComponent as CardIcon } from '../../assets/icons/Group 54.svg';

const advantages = [
  {
    content: (
      <>
        <div className="self-stretch justify-start text-stone-300 text-base font-medium font-['Manrope'] leading-tight">Единовременную выплату <br/>в размере </div>
        <div className="justify-start"><span className="text-zinc-100 text-base font-extrabold font-['Manrope'] uppercase leading-tight">от</span><span className="text-zinc-100 text-2xl font-extrabold font-['Manrope'] uppercase leading-tight"> 3 100 000 ₽</span></div>
      </>
    )
  },
  {
    content: (
      <>
        <div className="self-stretch justify-start text-stone-300 text-base font-medium font-['Manrope'] leading-tight">Ежемесячные выплаты </div>
        <div className="justify-start"><span className="text-zinc-100 text-base font-extrabold font-['Manrope'] uppercase leading-tight">до</span><span className="text-zinc-100 text-2xl font-extrabold font-['Manrope'] uppercase leading-tight"> 445 000 ₽  </span></div>
      </>
    )
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Социальные льготы</span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight"> <br/>и </span><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">страховую</span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight"> защиту <br/>для </span><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">членов семьи</span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight"> и </span><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">детей</span></div>
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Медицинское </span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">обслуживание <br/>в учреждениях <br/>Минобороны РФ</span></div>
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Кредитные каникулы, </span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">обеспечение жильем, бесплатное образование в вузах РФ </span></div>
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Статус ветерана боевых действий, </span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">при выполнении условий</span></div>
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Служебное жильё, </span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">компенсация за наём</span></div>
  },
  {
    content: <div className="self-stretch justify-start"><span className="text-white text-base font-extrabold font-['Manrope'] leading-tight">Поддержка <br/>при увольнении</span><span className="text-stone-300 text-base font-medium font-['Manrope'] leading-tight">, оформление инвалидности, увечье, травмы, контузии <br/>или гибели военнослужащего  </span></div>
  }
];

const ContractAdvantages = () => {
  return (
    <div className="w-[1110px] mx-auto my-10 flex flex-col justify-start items-center gap-14">
      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        <div className="justify-start text-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px]">ПРЕИМУЩЕСТВА СЛУЖБЫ ПО КОНТРАКТУ</div>
        <div className="self-stretch justify-start text-zinc-600 text-2xl font-bold font-['Manrope'] uppercase leading-loose">Подпиши контракт с Министерством обороны РФ, прими участие <br/>в СВО и получи:</div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap justify-start items-start gap-7">
        {advantages.map((advantage, index) => (
          <AdvantageCard key={index}>
            <div className="flex flex-col justify-start items-start gap-3">
                <CardIcon className="w-6 h-6" />
                {advantage.content}
            </div>
          </AdvantageCard>
        ))}
      </div>
    </div>
  );
};

export default ContractAdvantages;
