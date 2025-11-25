import React from 'react';
import clsx from 'clsx';

const Card = ({ children, className, onClick, ...props }) => {
    return (
        <div
            onClick={onClick}
            className={clsx(
                'bg-white rounded-2xl p-4 shadow-sm border border-slate-100',
                onClick && 'cursor-pointer hover:shadow-md transition-all active:scale-[0.98]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
