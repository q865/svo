import React from 'react';
import LinkCard from './LinkCard';
import { ReactComponent as PhoneIcon } from '../../assets/images/Call.svg';

const FormInput = ({ label, value, type = 'text' }) => (
  <div>
    <label className="text-brand-gray-light text-base font-bold font-['Manrope'] uppercase leading-normal tracking-tight">
      {label}
    </label>
    <input
      type={type}
      defaultValue={value}
      className="w-full bg-transparent border-b border-brand-gray-light py-2 text-brand-gray-light text-base font-medium font-['Manrope'] leading-normal tracking-tight focus:outline-none focus:border-brand-red"
    />
  </div>
);

const ContactFormSection = () => {
  const links = [
    { title: 'заполни заявление На портале гос. услуг', linkText: 'Перейти на портал' },
    { title: 'Военные комиссариаты свердловской области', linkText: 'Посмотреть все комиссариаты' },
    { title: 'Получи больше информации на сайте министерства обороны', linkText: 'Узнать больше' },
  ];

  return (
    <div className="w-[1110px] mx-auto my-14 flex flex-col justify-start items-start gap-7">
      {/* Form Section */}
      <div className="self-stretch h-[588px] bg-brand-green p-14 flex gap-16">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-between">
          <h2 className="text-brand-white text-3xl font-bold font-['Manrope'] uppercase leading-10">
            Если ты готов заключить контракт и защитить родину, заполни форму
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-white rounded-full flex items-center justify-center">
                <PhoneIcon className="w-7 h-7 text-brand-green" />
              </div>
              <span className="text-brand-white text-3xl font-bold font-['Manrope'] uppercase leading-[49px]">+7 (343) 229-05-11</span>
            </div>
            <div className="flex items-center gap-4">
               <div className="w-14 h-14 bg-brand-white rounded-full flex items-center justify-center">
                <PhoneIcon className="w-7 h-7 text-brand-green" />
              </div>
              <span className="text-brand-white text-3xl font-bold font-['Manrope'] uppercase leading-[49px]">+7 (343) 374-55-33</span>
            </div>
            <div>
              <p className="text-brand-white text-6xl font-bold font-['Manrope'] uppercase leading-[88.32px]">112</p>
              <p className="text-brand-white text-xl font-medium font-['Manrope'] leading-10 tracking-tight">Бесплатно по всей России</p>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-brand-gray-light h-full" />

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col justify-between">
          <form className="space-y-8">
            <FormInput label="ФИО*" value="Иван" />
            <FormInput label="Гражданство*" value="Гражданство РФ" />
            <FormInput label="Номер телефона*" value="8 900 000 00 00" />
          </form>
          <div>
            <button className="relative w-64 h-14 bg-brand-black text-brand-white text-base font-medium font-['Manrope'] leading-none">
                <div className="absolute top-0 left-0 w-2 h-2 bg-brand-white" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-brand-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-brand-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-brand-white" />
                Отправить данные
            </button>
            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 border border-brand-white bg-transparent" />
              <span className="text-brand-white text-xs font-medium font-['Manrope'] leading-normal tracking-tight">
                Я даю свое согласие на <a href="#" className="underline">обработку персональных данных</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Link Cards Section */}
      <div className="self-stretch flex justify-between items-start">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} linkText={link.linkText} />
        ))}
      </div>
    </div>
  );
};

export default ContactFormSection;
