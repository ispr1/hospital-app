import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, FileText, Star, Check } from 'lucide-react';
import Card from '../../components/common/Card';

const Notifications = () => {
    const navigate = useNavigate();

    const notifications = [
        { type: 'appointment', title: 'Appointment Reminder', message: 'Your appointment with Dr. Sarah Smith is tomorrow at 10:00 AM', time: '2 hours ago', read: false },
        { type: 'report', title: 'Lab Results Ready', message: 'Your blood test results are now available', time: '1 day ago', read: false },
        { type: 'promo', title: 'Special Offer', message: 'Get 20% off on home health checkup packages', time: '2 days ago', read: true },
        { type: 'success', title: 'Payment Successful', message: 'Your payment of ₹520 was successful', time: '3 days ago', read: true }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Notifications</h2>
                </div>
                <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                    Mark all read
                </button>
            </div>

            <div className="p-6 space-y-3">
                {notifications.map((notif, idx) => (
                    <Card
                        key={idx}
                        className={`flex gap-4 ${notif.read ? 'bg-white' : 'bg-blue-50/50 border-blue-100'}`}
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${notif.type === 'appointment' ? 'bg-green-100 text-green-600' :
                                notif.type === 'report' ? 'bg-blue-100 text-blue-600' :
                                    notif.type === 'promo' ? 'bg-orange-100 text-orange-600' :
                                        'bg-purple-100 text-purple-600'
                            }`}>
                            {notif.type === 'appointment' ? <Calendar className="w-5 h-5" /> :
                                notif.type === 'report' ? <FileText className="w-5 h-5" /> :
                                    notif.type === 'promo' ? <Star className="w-5 h-5" /> :
                                        <Check className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-semibold text-slate-800 text-sm">{notif.title}</h4>
                                {!notif.read && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                            </div>
                            <p className="text-sm text-slate-600 mb-2 leading-relaxed">{notif.message}</p>
                            <p className="text-xs text-slate-400 font-medium">{notif.time}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
