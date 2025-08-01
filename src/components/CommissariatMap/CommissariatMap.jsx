import React from 'react';
import mapImage from '../../assets/images/image 47.png';

const CommissariatMap = () => {
    return (
        <div className="bg-brand-gray-darker py-16">
            <div className="container mx-auto px-4" style={{ maxWidth: '1110px' }}>
                <div className="flex flex-col justify-start items-start gap-7">
                    <div className="px-2.5 py-1 bg-brand-red inline-flex justify-center items-center">
                        <div className="text-white text-sm font-semibold font-gilroy leading-snug">
                            Адрес центрального комиссариата
                        </div>
                    </div>
                    <div className="self-stretch text-white text-xl font-bold font-manrope leading-normal">
                        620014, Екатеринбург, ул. Бакинских Комиссаров д. 173
                    </div>
                    <img className="self-stretch h-96 w-full object-cover" src={mapImage} alt="Карта комиссариата" />
                </div>
            </div>
        </div>
    );
};

export default CommissariatMap;
