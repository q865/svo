import React from 'react';
import VacancyCard from './VacancyCard';
import vacancyImg from '../../assets/images/11b8cd71892b911eda1e36da6e302fabb5996e05.png';

const vacanciesData = [
  { id: 1, title: 'Гранатометчик', salary: '232 000. ₽', image: vacancyImg, active: true },
  { id: 2, title: 'Стрелок', salary: '210 000. ₽', image: vacancyImg },
  { id: 3, title: 'Водитель-механик', salary: '225 000. ₽', image: vacancyImg },
  { id: 4, title: 'Сапер', salary: '240 000. ₽', image: vacancyImg },
  { id: 5, title: 'Снайпер', salary: '250 000. ₽', image: vacancyImg },
  { id: 6, title: 'Пулеметчик', salary: '230 000. ₽', image: vacancyImg },
];

const Vacancies = () => {
  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-screen-xl mx-auto px-8 2xl:px-0 flex flex-col items-center gap-14">
        <h2 className="text-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px] self-start">
          Вакансии
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {vacanciesData.map(vacancy => (
            <VacancyCard 
              key={vacancy.id}
              title={vacancy.title}
              salary={vacancy.salary}
              image={vacancy.image}
              active={vacancy.active}
            />
          ))}
        </div>
        <button className="px-4 py-1.5 bg-red-600 text-white text-xs font-medium font-['Manrope'] leading-snug hover:bg-red-700 transition-colors">
          Смотреть больше
        </button>
      </div>
    </section>
  );
};

export default Vacancies;
