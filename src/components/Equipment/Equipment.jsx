import React from 'react';
import rifle from '../../assets/images/rifle.png';
import bodyArmor from '../../assets/images/body-armor.png';
import firstAidKit from '../../assets/images/first-aid-kit.png';
import backpack from '../../assets/images/backpack.png';

const Equipment = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold uppercase">
                    <span className="text-brand-white">Экипировка</span>{' '}
                    <span className="text-brand-gray-medium">военного</span>
                </h2>
                <div className="flex space-x-2">
                    <button className="w-12 h-12 border border-brand-gray-lighter flex items-center justify-center">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 1L1 9L9 17" stroke="white" strokeWidth="2"/>
                        </svg>
                    </button>
                    <button className="w-12 h-12 border border-brand-gray-lighter flex items-center justify-center">
                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 9L1 17" stroke="white" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <img src={rifle} alt="Оружие" className="mx-auto mb-4"/>
                    <p className="text-brand-white uppercase">Оружие</p>
                </div>
                <div className="text-center">
                    <img src={bodyArmor} alt="Бронежилет" className="mx-auto mb-4"/>
                    <p className="text-brand-white uppercase">Бронежилет</p>
                </div>
                <div className="text-center">
                    <img src={firstAidKit} alt="Аптечка" className="mx-auto mb-4"/>
                    <p className="text-brand-white uppercase">Аптечка</p>
                </div>
                <div className="text-center">
                    <img src={backpack} alt="Универсальный рюкзак" className="mx-auto mb-4"/>
                    <p className="text-brand-white uppercase">Универсальный рюкзак</p>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
