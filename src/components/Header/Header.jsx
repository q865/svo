import React from 'react';
import LocationIcon from '../../assets/icons/LocationIcon';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="bg-zinc-900 text-neutral-200 font-manrope">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="flex justify-between items-center py-3 border-b border-neutral-800">
          <div className="flex items-center">
            <img className="w-14 h-10" src={logo} alt="Logo" />
            <div className="ml-4">
              <p className="text-white text-[9px] font-normal leading-none opacity-70">
                Поступай на службу по контракту от Свердловской области!
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <LocationIcon />
              <div className="ml-2">
                <p className="text-neutral-200 text-sm font-semibold leading-[10px]">Хабаровск</p>
                <p className="text-neutral-400 text-[10px] font-normal leading-[10px]">Выбрать другой город</p>
              </div>
            </div>

            <div>
              <p className="text-white text-base font-bold uppercase leading-tight">+7 (343) 229-05-11</p>
              <p className="text-white text-base font-bold uppercase leading-tight">+7 (343) 374-55-33</p>
            </div>

            <div className="text-center">
              <p className="text-white text-lg font-bold uppercase leading-tight">112</p>
              <p className="text-white text-xs font-normal leading-none opacity-60">бесплатно<br />по всей России</p>
            </div>

            <button className="bg-red-600 text-white px-3.5 py-2 text-xs font-medium leading-snug">
              Заполнить форму на службу
            </button>
          </div>
        </div>

        {/* Bottom navigation section */}
        <nav className="flex justify-center items-center py-4 text-xs font-semibold">
          <div className="flex justify-between w-full max-w-5xl">
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Вакансии</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Условия приема</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Денежное довольствие</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Выплаты и соц гарантии</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Военные комиссариаты</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Наши герои</a>
            <a href="#" className="text-neutral-200 leading-snug hover:text-white">Контакты</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;