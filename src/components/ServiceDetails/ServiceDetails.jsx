import React from 'react';
import image4 from '../../assets/images/image 4.png';
import image5 from '../../assets/images/image 5.png';

const ServiceDetails = () => {
  return (
    <div className="w-[1110px] mx-auto my-10 grid grid-cols-2 gap-x-8 gap-y-4 items-center">
      {/* Row 1, Col 1: Text 1 */}
      <div className="text-stone-50 text-lg font-normal font-['Manrope'] leading-7">
        <p>
          Граждане прошедшие военную службу по призыву (контракту) и имеющие высшее профессиональное образование,
          родственное соответсвующей военно-учетной специальности, и поступившие на военную службу по контракту на
          воинскую должность, для которой штатом предусмотрено воинское звание офицера{' '}
          <span className="font-semibold">
            прививается первое воинское звание офицера Лейтенант
          </span>
        </p>
      </div>

      {/* Row 1, Col 2: Image 1 (image 5) */}
      <div className="w-[540px] h-56">
        <img src={image5} alt="Service background" className="w-full h-full object-cover" />
      </div>

      {/* Row 2, Col 1: Image 2 (image 4) */}
      <div className="w-[540px] h-56">
        <img src={image4} alt="Soldiers" className="w-full h-full object-cover" />
      </div>

      {/* Row 2, Col 2: Text 2 */}
      <div className="text-stone-50 text-lg font-normal font-['Manrope'] leading-7">
        <p>
          Более 3000 военнослужащих заключивших первые (новые) контракты с Министерством обороны Российской Федерации
          через пункт отбора на военную службу по контракту г. Екатеринбурга в 2022-2023 году выполняют специальные
          задачи в рамках Специальной военной операции и более 120 военнослужащих награждены государственными и
          ведомственными наградами
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
