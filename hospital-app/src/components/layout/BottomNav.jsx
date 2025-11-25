import React from 'react';
import { Home, Search, Calendar, User, Pill, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const BottomNav = () => {
    const navItems = [
        { icon: Home, label: 'Home', path: '/home' },
        { icon: Heart, label: 'Health', path: '/health' },
        { icon: Calendar, label: 'Bookings', path: '/bookings' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 pb-6 md:pb-3 z-50">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex flex-col items-center gap-1 transition-colors',
                                isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                            )
                        }
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default BottomNav;
