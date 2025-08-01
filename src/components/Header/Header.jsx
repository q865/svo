import React from 'react';
import logo from '../../assets/images/logo.png';
import { ReactComponent as RoomIcon } from '../../assets/icons/Room.svg';
import { ReactComponent as ChevronDown } from '../../assets/icons/Vector 84.svg';

const NavLink = ({ children, active = false, withChevron = false }) => (
  <a href="#" className="text-neutral-200 text-xs font-semibold font-['Manrope'] leading-snug relative pb-1 flex items-center">
    {children}
    {withChevron && <ChevronDown className="ml-1.5" />}
    {active && <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-red"></span>}
  </a>
);

const Header = () => {
  return (
    <header className="bg-brand-gray-darker text-brand-white font-['Manrope']">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 border-b border-brand-gray-dark">
          <div className="flex items-center h-full">
            <div className="flex items-center pr-4 h-full border-r border-brand-gray-dark">
              <img className="w-14 h-10" src={logo} alt="Logo" />
            </div>
            <div className="pl-4">
              <p className="text-brand-white text-opacity-70 text-[9px] font-normal leading-none max-w-[150px]">
                Поступай на службу по контракту<br/>от Свердловской области!
              </p>
            </div>
          </div>

          <div className="flex items-center h-full">
            <div className="flex items-center px-6 h-full border-l border-r border-brand-gray-dark">
              <RoomIcon className="w-3.5 h-3.5 mr-2 text-brand-red" />
              <div>
                <p className="text-neutral-200 text-sm font-semibold leading-tight">Хабаровск</p>
                <p className="text-neutral-400 text-[10px] font-normal leading-tight cursor-pointer hover:text-brand-white flex items-center">
                  Выбрать другой город <ChevronDown className="ml-1.5" />
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center px-6 h-full border-r border-brand-gray-dark">
                <div>
                  <p className="text-brand-white text-base font-bold uppercase leading-tight">+7 (343) 229-05-11</p>
                  <p className="text-brand-white text-base font-bold uppercase leading-tight">+7 (343) 374-55-33</p>
                </div>
              </div>
              <div className="flex items-center px-6 h-full border-r border-brand-gray-dark">
                <p className="text-brand-white text-lg font-bold uppercase leading-tight mr-2">112</p>
                <p className="text-brand-white text-opacity-60 text-xs font-normal leading-none max-w-[80px]">
                  бесплатно
                  <br />
                  по всей России
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center h-full">
             <div className="px-6 h-full flex items-center border-l border-brand-gray-dark">
               <button className="px-6 py-3 bg-brand-red text-brand-white text-xs font-medium leading-snug">
                Заполнить форму на службу
              </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar - Navigation */}
        <div className="h-14 flex items-center justify-center border-b border-brand-gray-dark">
          <nav>
            <ul className="flex items-center space-x-8">
              <li><NavLink active>Вакансии</NavLink></li>
              <li><NavLink withChevron>Условия приема</NavLink></li>
              <li><NavLink>Денежное довольствие</NavLink></li>
              <li><NavLink withChevron>Выплаты и соц гарантии</NavLink></li>
              <li><NavLink>Военные комиссариаты</NavLink></li>
              <li><NavLink>Наши герои</NavLink></li>
              <li><NavLink>Контакты</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
