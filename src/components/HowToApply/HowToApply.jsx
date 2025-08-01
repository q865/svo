import React from 'react';
import HowToApplyStep from './HowToApplyStep';

const steps = [
  {
    stepNumber: 1,
    title: 'Оставьте заявку на сайте',
    description: 'Мы свяжемся с Вами, расскажем подробности и ответим на вопросы (кнопка “оставить заявку”)',
    buttonText: 'Оставить заявку',
  },
  {
    stepNumber: 2,
    title: 'Собрать необходимые документы',
    documentList: [
      'Копия паспорта',
      'Копия военного билета (для иностранных граждан – при наличии)',
      'Собственноручно написанная автобиография',
      'Копия документа об образовании',
      'Копия свидетельства о браке и о рождении детей',
      'Копия свидетельства о постановке на учет в налоговом органе',
      'справка из банка о банковских реквизитах для перечисления денежного довольствия',
    ],
  },
  {
    stepNumber: 3,
    title: 'Медкомиссия и подписание контракта',
    description: 'Пройти медкомиссию и собеседование. После прохождения медицинского осмотра и подписания документов контрактник получает статус участника СВО.',
  },
  {
    stepNumber: 4,
    title: 'Подготовка и убытие к месту службы',
    description: 'Пройти обучение и отправиться к месту службы. Все контрактники, принятые на службу, обеспечиваются питанием, обеспечением, трансфером, страхованием, медицинским обслуживанием.',
  },
];

const HowToApply = () => {
  return (
    <div className="px-40 my-14">
      <div className="flex flex-col justify-start items-start gap-14">
        <div className="flex flex-col justify-start items-start gap-5">
          <h2 className="w-[1110px] justify-start text-white text-5xl font-bold font-['Manrope'] uppercase leading-[66px]">КАК ЗАКЛЮЧИТЬ КОНТРАКТ</h2>
          <p className="self-stretch justify-start text-zinc-600 text-2xl font-bold font-['Manrope'] uppercase leading-loose">Подпиши контракт с Министерством обороны РФ, прими участие <br/>в СВО и получи:</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-14">
          {steps.map((step) => (
            <HowToApplyStep
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              buttonText={step.buttonText}
              documentList={step.documentList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
