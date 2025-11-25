import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import Card from '../../components/common/Card';

const MyBookings = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');

    const bookings = [
        { id: 'BK12345', doctor: 'Dr. Sarah Smith', specialty: 'Cardiology', date: 'Nov 22, 2024', time: '10:00 AM', status: 'upcoming' },
        { id: 'BK12344', doctor: 'Dr. Michael Chen', specialty: 'Orthopedics', date: 'Nov 18, 2024', time: '3:00 PM', status: 'completed' },
        { id: 'BK12343', doctor: 'Dr. Emily Brown', specialty: 'Pediatrics', date: 'Nov 15, 2024', time: '11:00 AM', status: 'completed' }
    ];

    const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">My Bookings</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <Card
                            key={booking.id}
                            onClick={() => navigate(`/booking/${booking.id}`)}
                            className="flex items-start gap-4"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                                {booking.doctor.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-slate-800">{booking.doctor}</h3>
                                        <p className="text-sm text-slate-600">{booking.specialty}</p>
                                    </div>
                                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${booking.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {booking.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm mt-3 pt-3 border-t border-slate-50">
                                    <div className="flex items-center gap-1.5 text-slate-600">
                                        <Calendar className="w-4 h-4 text-blue-500" />
                                        <span className="font-medium">{booking.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-600">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        <span className="font-medium">{booking.time}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
