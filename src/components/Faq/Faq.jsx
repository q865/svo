import React, { useState } from 'react';
import plusIcon from '../../assets/этапыПодготовки/Group 78.svg';
import minusIcon from '../../assets/этапыПодготовки/Group 19.svg';

const FaqItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-brand-gray-dark">
        <button
            className="w-full flex justify-between items-center py-6 text-left"
            onClick={onClick}
        >
            <span className="text-white text-xl font-gilroy font-semibold">{question}</span>
            <div className={`w-8 h-8 flex items-center justify-center rounded-md ${isOpen ? 'bg-brand-red' : 'bg-brand-green'}`}>
                <img src={isOpen ? minusIcon : plusIcon} alt="toggle" className="w-4 h-4" />
            </div>
        </button>
        {isOpen && (
            <div className="pb-6 pr-12">
                <p className="text-brand-gray-light text-base font-gilroy">{answer}</p>
            </div>
        )}
    </div>
);

const Faq = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleToggle = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    const faqData = [
        {
            question: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            answer: "Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."
        },
        {
            question: "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu?",
            answer: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
        },
        {
            question: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim?",
            answer: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue."
        },
        {
            question: "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus?",
            answer: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
        },
    ];

    return (
        <div className="bg-brand-gray-darker py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-white text-5xl font-bold font-manrope uppercase mb-12">Ответы на вопросы</h2>
                <div className="bg-[#1F1F1F] p-4 md:p-8">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openQuestion === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
