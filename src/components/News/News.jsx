import React from 'react';
import newsImage from '../../assets/images/news.png';

const NewsCard = ({ image, date, title, description }) => (
  <div className="w-[540px] h-80 relative overflow-hidden border border-zinc-600">
    <div className="absolute left-0 top-0 w-60 h-full">
      <img className="w-full h-full object-cover" src={image} alt={title} />
    </div>
    <div className="absolute left-[260px] top-[20px] w-64 flex flex-col items-start gap-4">
      <div className="p-2.5 bg-stone-600">
        <div className="text-white text-xs font-bold font-['Manrope'] uppercase leading-3">{date}</div>
      </div>
      <div className="self-stretch text-white text-base font-bold font-['Manrope'] uppercase leading-snug">{title}</div>
    </div>
    <div className="absolute left-[260px] top-[233px] w-64 text-zinc-400 text-base font-normal font-['Manrope'] leading-snug">
      {description}
    </div>
  </div>
);

const News = () => {
  const newsData = [
    {
      id: 1,
      image: newsImage,
      date: '05.12.24',
      title: 'Здесь будет новость \nв несколько строк',
      description: 'Ежегодный оплачиваемый проезд к месту проведения отпуска \nи обратно'
    },
    {
      id: 2,
      image: newsImage,
      date: '05.12.24',
      title: 'Здесь будет новость \nв несколько строк',
      description: 'Ежегодный оплачиваемый проезд к месту проведения отпуска \nи обратно'
    }
  ];

  return (
    <section className="bg-neutral-900 py-24">
      <div className="max-w-screen-xl mx-auto px-8 2xl:px-0 flex flex-col items-start gap-12">
        <h2 className="text-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px]">
          Новости
        </h2>
        <div className="self-stretch flex justify-center items-center gap-7">
          {newsData.map(item => (
            <NewsCard
              key={item.id}
              image={item.image}
              date={item.date}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

