import React from 'react';

const DetailList = ({ items }) => (
  <ul className="space-y-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-center gap-3.5">
        <div className="w-2 h-2 bg-brand-red rounded-full" />
        <span className="text-brand-gray-light text-lg font-normal font-['Gilroy'] leading-snug">{item}</span>
      </li>
    ))}
  </ul>
);

const FinancialAllowance = () => {
  const specialPayments = [
    'БПЛА',
    'Боевой машины пехоты (десанта)',
    'Зенитно-ракетного комплекса (системы)',
    'Системы залпового огня',
  ];

  return (
    <div className="bg-brand-gray-darker py-20 px-40 border-t border-b border-brand-gray-dark">
      <div className="w-[1110px] mx-auto">
        {/* Titles */}
        <div>
          <h2 className="text-brand-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px]">денежное</h2>
          <h3 className="text-brand-gray text-4xl font-bold font-['Manrope'] uppercase leading-[58px]">довольствие</h3>
        </div>

        {/* Main Content Grid */}
        <div className="mt-16 grid grid-cols-12 gap-x-8">
          {/* Left Column */}
          <div className="col-span-6">
            <div className="mb-6">
              <p className="text-brand-gray text-2xl font-bold font-['Manrope'] uppercase leading-loose">Ежемесячная выплата по контракту</p>
              <p className="text-brand-white text-4xl font-bold font-['Manrope'] uppercase leading-[49px]">от 210 000 ₽</p>
              <p className="mt-4 text-brand-gray-light text-lg font-normal font-['Manrope'] leading-7">
                в зависимости от воинского звания, должности, выслуги лет, уровня мастерства и региональных коэффициентов.
              </p>
            </div>
            
            <div className="relative w-96 h-14 my-8">
                <div className="absolute inset-0 bg-brand-red" />
                <div className="absolute top-0 left-0 w-2 h-2 bg-brand-white" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-white" />
                <div className="absolute inset-0 flex items-center justify-center text-brand-white text-base font-medium font-['Manrope'] leading-snug">
                    Посмотреть список документов при подаче
                </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-6">
            <div className="mb-6">
              <p className="text-brand-gray text-2xl font-bold font-['Manrope'] uppercase leading-loose">Единовременная выплата в размере</p>
              <p className="text-brand-white text-4xl font-bold font-['Manrope'] uppercase leading-[49px]">3 100 000 ₽</p>
              <p className="mt-2 text-center text-brand-gray-light text-lg font-semibold font-['Manrope'] leading-normal">
                при заключении контракта на срок от одного года
              </p>
            </div>
            <hr className="border-brand-gray my-4" />
            <p className="text-brand-gray-light text-lg font-normal font-['Manrope'] leading-7">
              При подписании контракта, граждане могут рассчитывать на дополнительные выплаты за участие в СВО, включая случаи травмы, ранении, увечье, инвалидности или гибели. В соответствии с законом 306-ФЗ, страховая выплата предоставляется в полном
            </p>
          </div>
        </div>

        {/* Special Distinctions Section */}
        <div className="mt-16">
            <p className="text-brand-gray text-2xl font-bold font-['Manrope'] uppercase leading-loose">Выплаты за особые отличия</p>
            <p className="text-brand-white text-4xl font-bold font-['Manrope'] uppercase leading-[49px]">в ходе боевых действий:</p>
            
            <div className="mt-8 grid grid-cols-12 gap-x-8">
                {/* Left Side of Distinctions */}
                <div className="col-span-6 space-y-6">
                    <div>
                        <p className="text-brand-white text-3xl font-bold font-['Gilroy'] uppercase leading-loose">200 000 - 300 000 руб.</p>
                        <p className="text-brand-gray-light text-lg font-normal font-['Gilroy'] leading-snug">Уничтожение вражеского самолета</p>
                    </div>
                    <div>
                        <p className="text-brand-white text-3xl font-bold font-['Gilroy'] uppercase leading-loose">100 000 руб.</p>
                        <p className="text-brand-gray-light text-lg font-normal font-['Gilroy'] leading-snug">Уничтожение вражеского танка</p>
                    </div>
                     <div>
                        <p className="text-brand-white text-3xl font-bold font-['Gilroy'] uppercase leading-loose">ДО 10 МЛН. ₽</p>
                        <p className="text-brand-gray-light text-lg font-normal font-['Gilroy'] leading-snug">Списание кредитов:</p>
                    </div>
                </div>

                {/* Right Side of Distinctions */}
                <div className="col-span-6">
                    <p className="text-brand-white text-3xl font-bold font-['Gilroy'] uppercase leading-loose">50 000 руб.</p>
                    <div className="mt-4">
                        <DetailList items={specialPayments} />
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default FinancialAllowance;
