import React from 'react';

const OriginalCard = ({ text }) => {
    return (
        <div className="flex flex-col items-center bg-stone-800 shadow-lg p-6 rounded-xl border-2 border-teal-600 transition-transform transform hover:scale-105">
            <p className="text-s text-white mt-4">{text}</p>
        </div>
    );
};

export default OriginalCard;
