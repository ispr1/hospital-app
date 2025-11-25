import React from 'react';
import clsx from 'clsx';
import { Loader2 } from 'lucide-react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    disabled,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20',
        secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50',
        ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
        danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
    };

    return (
        <button
            className={clsx(
                'rounded-xl font-semibold transition-all active:scale-95 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                (disabled || isLoading) && 'opacity-50 cursor-not-allowed active:scale-100',
                className
            )}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
            ) : Icon ? (
                <Icon className="w-5 h-5" />
            ) : null}
            {children}
        </button>
    );
};

export default Button;
