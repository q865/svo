import React from 'react';
import GuaranteeCard from './GuaranteeCard';

const guarantees = [
  { text: 'Возможность приобрести жилье за счет Минобороны РФ, в том числе через ипотечную программу' },
  { text: 'Служебное жилье или компенсация за найм жилья', highlighted: true },
  { text: 'Бесплатное обследование, лечение и реабилитация в военно-медицинских учреждениях страхование жизни и здоровья за счет федерального бюджета в случае травмы, увечья, инвалидности, контузии' },
  { text: 'Поддержка членам семьи в случае гибели военнослужащего при исполнении' },
  { text: 'Право на льготную пенсию после 20 лет службы' },
  { text: 'Дополнительные выплаты, предусмотренные 52-ФЗ, как на федеральном, так и на уровне регионов' },
  { text: 'Статус ветерана боевых действий и соответствующие льготы', highlighted: true },
  { text: 'Кредитные и налоговые каникулы', highlighted: true },
  { text: 'Бюджетные места для обучения детей в вузах' },
  { text: 'За будущими контрактниками бронируются рабочие места' },
  { text: 'Бесплатный отдых детей в летних оздоровительных лагерях' },
  { text: 'Единые дополнительные выплаты, льготы и гарантии от свердловской области для военнослужащих по контракту', highlighted: true },
];

const SocialGuarantees = () => {
  return (
    <div className="w-[1110px] mx-auto my-20">
      {/* Titles */}
      <div>
        <h2 className="text-brand-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px]">Социальные гарантии и льготы</h2>
        <h3 className="text-brand-gray text-4xl font-bold font-['Manrope'] uppercase leading-[58px]">военнослужащему и его семье</h3>
      </div>

      {/* Guarantees Grid */}
      <div className="mt-16 grid grid-cols-3 gap-8">
        {guarantees.map((guarantee, index) => (
          <GuaranteeCard key={index} highlighted={guarantee.highlighted}>
            {guarantee.text}
          </GuaranteeCard>
        ))}
      </div>
    </div>
  );
};

export default SocialGuarantees;
