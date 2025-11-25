import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Search, Ambulance, Calendar, Video, Home as HomeIcon, Activity, Package, ChevronRight, Pill, Heart } from 'lucide-react';
import Input from '../../components/common/Input';
import Card from '../../components/common/Card';

const HomeScreen = () => {
    const navigate = useNavigate();

    const services = [
        { id: 'opd', icon: Calendar, title: 'OPD Booking', color: 'bg-blue-500', desc: 'Book appointments', path: '/opd' },
        { id: 'consultation', icon: Video, title: 'Online Consult', color: 'bg-green-500', desc: 'Video consultation', path: '/consultation' },
        { id: 'health', icon: Heart, title: 'Health Tips', color: 'bg-pink-500', desc: 'Stay Healthy', path: '/health' },
        { id: 'homeCheckup', icon: HomeIcon, title: 'Home Checkup', color: 'bg-purple-500', desc: 'Doorstep service', path: '/home-checkup' },
        { id: 'rentals', icon: Activity, title: 'Rentals', color: 'bg-orange-500', desc: 'Medical equipment', path: '/rentals' },
        { id: 'ambulance', icon: Ambulance, title: 'Ambulance', color: 'bg-red-500', desc: 'Emergency service', path: '/ambulance' },
        { id: 'lab', icon: Package, title: 'Lab Tests', color: 'bg-indigo-500', desc: 'Home collection', path: '/lab-tests' }
    ];

    return (
        <div className="p-6 space-y-6 pb-24">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm text-slate-500">Welcome back,</h3>
                    <h2 className="text-2xl font-bold text-slate-800">John Doe</h2>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => navigate('/notifications')} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors relative">
                        <Bell className="w-5 h-5 text-slate-600" />
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <Input
                icon={Search}
                placeholder="Search services, doctors..."
                className="bg-white shadow-sm border-slate-100"
            />

            {/* Quick Access Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-blue-600/20">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-1">Need Urgent Care?</h3>
                    <p className="text-sm text-blue-100 mb-3">24/7 Emergency Services</p>
                    <button
                        onClick={() => navigate('/ambulance')}
                        className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors shadow-sm"
                    >
                        Call Ambulance
                    </button>
                </div>
                <Ambulance className="absolute right-[-10px] bottom-[-10px] w-24 h-24 text-white opacity-10 rotate-[-15deg]" />
            </div>

            {/* Services Grid */}
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            onClick={() => navigate(service.path)}
                            className="hover:shadow-md transition-all active:scale-95"
                        >
                            <div className={`${service.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
                                <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">{service.title}</h4>
                            <p className="text-xs text-slate-500">{service.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h3>
                <Card onClick={() => navigate('/bookings')} className="flex items-center gap-3">
                    <div className="bg-green-100 p-2.5 rounded-xl">
                        <Calendar className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1 text-left">
                        <h4 className="font-semibold text-slate-800 text-sm">OPD Appointment</h4>
                        <p className="text-xs text-slate-500">Dr. Sarah Smith - Cardiology</p>
                        <p className="text-xs text-slate-400 mt-0.5">Tomorrow, 10:00 AM</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                </Card>
            </div>
        </div>
    );
};

export default HomeScreen;
