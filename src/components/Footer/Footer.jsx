import React from 'react';
import footerBg from '../../assets/images/image 39.png';
import copyrightIcon from '../../assets/icons/Vector 84.svg'; // Assuming this is the copyright icon

const Footer = () => {
    const navLinks1 = [
        { text: "Вакансии", active: true },
        { text: "Условия", active: false },
        { text: "Довольствие", active: false },
        { text: "Выплаты", active: false },
        { text: "Комиссариаты", active: false },
        { text: "Контакты", active: false },
    ];

    const navLinks2 = [
        { text: "Ответы на вопросы", sublinks: [] },
        { text: "Экипировка", sublinks: [] },
        { text: "Награды за СВО", sublinks: [] },
        { text: "Блог", sublinks: ["Где выгоднее?", "Как подписать?", "Вакансии на СВО"] },
    ];

    return (
        <footer 
            className="relative bg-cover bg-center text-white py-16"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className="absolute inset-0 bg-neutral-900/90"></div>
            <div className="container mx-auto px-4 relative z-10" style={{ maxWidth: '1110px' }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Навигация */}
                    <div className="md:col-span-8">
                        <div className="flex flex-wrap gap-x-20 gap-y-8">
                            {/* Колонка 1 */}
                            <div className="flex flex-col gap-3">
                                {navLinks1.map((link, index) => (
                                    <a key={index} href="#" className={`inline-flex items-center gap-2 text-sm font-bold font-manrope leading-snug ${link.active ? 'text-white' : 'text-neutral-400'}`}>
                                        <span className={`w-3 h-px ${link.active ? 'bg-white' : 'bg-neutral-400'}`}></span>
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                            {/* Колонка 2 */}
                            <div className="flex flex-col gap-3">
                                {navLinks2.map((link, index) => (
                                    <div key={index}>
                                        <a href="#" className="inline-flex items-center gap-2 text-sm font-bold font-manrope leading-snug text-neutral-400">
                                            <span className="w-3 h-px bg-neutral-400"></span>
                                            {link.text}
                                        </a>
                                        {link.sublinks.length > 0 && (
                                            <div className="pl-5 mt-2 flex flex-col gap-2">
                                                {link.sublinks.map((sublink, subIndex) => (
                                                    <a key={subIndex} href="#" className="inline-flex items-center gap-2 text-xs font-bold font-manrope leading-snug text-neutral-400">
                                                         <span className="w-3 h-px bg-neutral-400"></span>
                                                        {sublink}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Контакты */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end gap-6 text-left md:text-right">
                        <div className="w-full">
                            <p className="text-white text-xs leading-none max-w-xs">Адрес в г. Екатеринбург, где можно заключить свой первый либо новый контракт с Министерством обороны Российской Федерации</p>
                            <p className="text-white text-base font-semibold leading-normal mt-1.5">ул. Бакинских Комиссаров д. 173</p>
                        </div>
                        <div className="w-full">
                            <p className="text-white text-xs leading-none">Телефон:</p>
                            <p className="text-white text-2xl font-bold uppercase leading-normal mt-1">+7 (343) 211-30-19</p>
                        </div>
                        <div className="w-full">
                            <p className="text-white text-xs leading-none">email:</p>
                            <p className="text-white text-base font-bold leading-none mt-1">info@svo-kontrakt.ru</p>
                        </div>
                    </div>
                </div>

                {/* Нижняя строка */}
                <div className="mt-20 pt-6 border-t border-neutral-400 flex flex-wrap justify-between items-center gap-4">
                    <p className="text-white text-xs font-normal font-manrope leading-none max-w-xs">
                        Поступай на службу по контракту от Свердловской области!
                    </p>
                    <a href="#" className="px-3.5 py-2 border border-stone-300 text-white text-xs font-normal font-manrope leading-none">
                        Политика конфиденциальности
                    </a>
                    <div className="inline-flex items-center gap-1 text-stone-300">
                        <img src={copyrightIcon} alt="c" className="w-3 h-3" />
                        <span className="text-xs font-normal font-manrope leading-none">2020-2023</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
