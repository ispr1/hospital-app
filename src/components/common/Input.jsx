import React from 'react';
import clsx from 'clsx';

const Input = ({
    label,
    icon: Icon,
    error,
    className,
    containerClassName,
    ...props
}) => {
    return (
        <div className={clsx('w-full', containerClassName)}>
            {label && (
                <label className="block text-sm font-medium text-slate-700 mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {Icon && (
                    <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                )}
                <input
                    className={clsx(
                        'w-full bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all',
                        Icon ? 'pl-12 pr-4 py-3' : 'px-4 py-3',
                        error && 'border-red-500 focus:ring-red-500',
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default Input;
