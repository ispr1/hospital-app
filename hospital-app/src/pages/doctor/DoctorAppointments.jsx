import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock } from 'lucide-react';
import Card from '../../components/common/Card';

const DoctorAppointments = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Today');

    const appointments = [
        { id: 1, patient: 'John Doe', age: 35, time: '10:00 AM', type: 'OPD', status: 'upcoming' },
        { id: 2, patient: 'Jane Smith', age: 28, time: '11:00 AM', type: 'Online', status: 'upcoming' },
        { id: 3, patient: 'Mike Johnson', age: 45, time: '2:00 PM', type: 'OPD', status: 'completed' }
    ];

    const tabs = ['Today', 'Upcoming', 'Completed'];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">My Appointments</h2>
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
                    {appointments.map((apt) => (
                        <Card
                            key={apt.id}
                            onClick={() => navigate(`/doctor/patient/${apt.id}`)}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm">
                                {apt.patient.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800">{apt.patient}</h3>
                                <p className="text-sm text-slate-600">{apt.age} years • {apt.type}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <Clock className="w-4 h-4 text-slate-500" />
                                    <span className="text-sm text-slate-600">{apt.time}</span>
                                </div>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${apt.status === 'upcoming' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
                                }`}>
                                {apt.status}
                            </span>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointments;
