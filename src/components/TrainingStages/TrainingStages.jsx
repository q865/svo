import React, { useState } from 'react';
import trainingImage from '../../assets/этапыПодготовки/image 28.png';
import plusIcon from '../../assets/этапыПодготовки/Group 78.svg';
import minusIcon from '../../assets/этапыПодготовки/Group 19.svg';
import leftArrowIcon from '../../assets/этапыПодготовки/Group 19.svg';
import rightArrowIcon from '../../assets/этапыПодготовки/Group 18.svg';

const AccordionItem = ({ title, children, isOpen, onClick, icon }) => (
    <div className="border-b border-white/20">
        <button
            className="w-full flex justify-between items-center py-6 text-left text-white text-2xl font-semibold"
            onClick={onClick}
        >
            <span>{title}</span>
            <img src={icon} alt="Toggle" className="w-8 h-8" />
        </button>
        {isOpen && <div className="pb-6 text-brand-gray-light">{children}</div>}
    </div>
);

const TrainingStages = () => {
    const [openAccordion, setOpenAccordion] = useState('motor-rifle');

    const handleAccordionClick = (accordionId) => {
        setOpenAccordion(openAccordion === accordionId ? null : accordionId);
    };

    const trainingSteps = [
        'Отработка учебных задач (нормативов) в ходе практических занятий является обязательным',
        'Тренировки проводятся с целью выработки практических навыков у военнослужащих и слаженных действий по выполнению боевых задач подразделениями и воинскими частями',
        'Тактико-строевое занятие – предназначено для отработки тактических приемов и способов действий солдат и подразделений в ходе отработки тактических нормативов со строгим соблюдением принципа «от простого к сложному»',
        'Практическая отработка мероприятий приведение в высшую степень боевой готовности, порядка действия по степеням боевой готовности в реальном масштабе времени (час за час) на едином тактическом фоне, с максимальным задействованием техники, в условиях реальной укомплектованности личным составом и обеспеченности материальными средствами.',
        'Комплексное занятие– основная форма практической подготовки военнослужащих, смен, расчетов по выполнению всего объема должностных и специальных обязанностей в мирное и военное время.',
        'Выход подразделения на полигон – форма подготовки подразделений для отработки вопросов полевой выучки, действий при вооружении и на боевой технике с обязательной отработкой положенных нормативов.',
        'Полевой выход– комплексная практическая форма обучения воинских частей и подразделений для повышения полевой выучки.',
    ];

    const accordionData = [
        { id: 'motor-rifle', title: 'МОТОСТРЕЛКОВЫЕ ВОЙСКА' },
        { id: 'tank-troops', title: 'ТАНКОВЫЕ ВОЙСКА' },
        { id: 'missile-troops', title: 'РАКЕТНЫЕ ВОЙСКА' },
        { id: 'air-defense-troops', title: 'ВОЙСКА ПРОТИВОВОЗДУШНОЙ ОБОРОНЫ' },
    ];

    const renderContent = () => (
        <div className="mt-4">
            <ul className="space-y-6">
                {trainingSteps.map((step, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-brand-gray-light mr-4 w-8 text-lg">0{index + 1}-</span>
                        <p className="flex-1 text-lg">{step}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex items-end space-x-4">
                <div className="flex flex-col space-y-2">
                    <button className="w-14 h-14 border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <img src={leftArrowIcon} alt="Previous" />
                    </button>
                    <button className="w-14 h-14 border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <img src={rightArrowIcon} alt="Next" />
                    </button>
                </div>
                <div className="flex-1">
                    <img src={trainingImage} alt="Training" className="w-full" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-brand-gray-darker text-white py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-left">
                    <h2 className="text-5xl font-bold uppercase text-white">этапы</h2>
                    <h3 className="text-4xl font-bold uppercase text-brand-gray-medium">подготовки</h3>
                </div>
                <div className="bg-brand-green p-8 md:p-12">
                    {accordionData.map(item => (
                        <AccordionItem
                            key={item.id}
                            title={item.title}
                            isOpen={openAccordion === item.id}
                            onClick={() => handleAccordionClick(item.id)}
                            icon={openAccordion === item.id ? minusIcon : plusIcon}
                        >
                            {renderContent()}
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainingStages;