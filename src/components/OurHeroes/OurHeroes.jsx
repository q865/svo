import React from 'react';

// Плейсхолдеры для иконок, так как ассеты не найдены
const LeftArrowIcon = () => (
    <svg className="w-4 h-6" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 2L2.5 12L12.5 22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const RightArrowIcon = () => (
    <svg className="w-4 h-6" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 22L11.5 12L1.5 2" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);


const OurHeroes = () => {
    const awards = [
        { img: "https://placehold.co/95x169", text: "Медаль «За трудовую доблесть»" },
        { img: "https://placehold.co/98x171", text: "Медаль «За разминирование»" },
        { img: "https://placehold.co/98x171", text: "Медаль «За боевые отличия»" },
        { img: "https://placehold.co/98x171", text: "Медаль «За воинскую доблесть»" }
    ];

    return (
        <div className="bg-brand-gray-darker py-16 font-gilroy">
            <div className="container mx-auto px-4 relative" style={{ maxWidth: '1110px' }}>
                
                {/* Заголовок */}
                <div className="flex items-center gap-7 mb-24">
                    <h2 className="text-white text-5xl font-bold font-manrope uppercase leading-tight">наши герои</h2>
                    {/* Декоративный элемент, как в макете */}
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                </div>

                {/* Основной контейнер */}
                <div className="bg-[#151515] border border-[#1F1F1F] h-[708px] relative">
                    
                    {/* Номер героя */}
                    <div className="absolute top-0 left-0 text-[#1F1F1F] text-8xl font-normal font-manrope leading-none select-none" style={{fontSize: '12rem', top: '-2rem', left: '1rem'}}>
                        01-
                    </div>

                    <div className="relative z-10 p-8 md:p-12 h-full">
                        <div className="grid grid-cols-12 gap-x-8 h-full">
                            
                            {/* Левая колонка с фото и стрелками */}
                            <div className="col-span-5 flex flex-col justify-between">
                                {/* Фотография героя */}
                                <div className="w-[256px] h-[288px] bg-neutral-900/25">
                                    {/* <img src="path/to/hero-image.png" alt="Никита Соколов" className="w-full h-full object-cover"/> */}
                                </div>
                                
                                {/* Стрелки навигации */}
                                <div className="flex items-center gap-4">
                                    <button className="w-16 h-16 bg-stone-600 flex items-center justify-center">
                                        <LeftArrowIcon />
                                    </button>
                                    <button className="w-16 h-16 border border-zinc-300 flex items-center justify-center">
                                        <RightArrowIcon />
                                    </button>
                                </div>
                            </div>

                            {/* Правая колонка с информацией */}
                            <div className="col-span-7">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-white text-xl font-bold leading-normal">Никита Соколов</h3>
                                        <p className="text-neutral-400 text-base">Танковые войска</p>
                                    </div>
                                    <div className="bg-stone-600 px-3 py-1">
                                        <p className="text-white text-xs font-semibold leading-snug">5 марта 2023 год</p>
                                    </div>
                                </div>
                                <div className="text-white text-base font-normal leading-normal max-w-[528px]">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                                </div>
                            </div>
                        </div>

                        {/* Блок с наградами внизу */}
                        <div className="absolute bottom-0 left-0 right-0 h-80 bg-neutral-900 px-12 py-6">
                            <h4 className="text-white text-lg font-bold leading-normal mb-5">Награды за СВО</h4>
                            <div className="flex justify-start gap-10">
                                {awards.map((award, index) => (
                                    <div key={index} className="text-center w-32">
                                        <img className="w-24 h-44 mx-auto mb-2" src={award.img} alt={award.text} />
                                        <p className="text-neutral-400 text-xs leading-none">{award.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHeroes;