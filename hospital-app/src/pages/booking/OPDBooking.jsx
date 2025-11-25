import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Filter, Star } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const OPDBooking = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');

    const doctors = [
        { id: 1, name: 'Dr. Sarah Smith', specialty: 'Cardiology', rating: 4.8, experience: '15 years', fee: 500, available: 'Today' },
        { id: 2, name: 'Dr. Michael Chen', specialty: 'Orthopedics', rating: 4.9, experience: '12 years', fee: 600, available: 'Tomorrow' },
        { id: 3, name: 'Dr. Emily Brown', specialty: 'Pediatrics', rating: 4.7, experience: '10 years', fee: 450, available: 'Today' }
    ];

    const filters = ['All', 'Cardiology', 'Orthopedics', 'Pediatrics', 'Neurology'];

    return (
        <div className="p-6 pb-24 min-h-screen bg-slate-50">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">OPD Booking</h2>
                </div>
                <button className="p-2 hover:bg-slate-200 rounded-full transition-colors">
                    <Filter className="w-5 h-5 text-slate-600" />
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeFilter === filter
                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Doctor List */}
            <div className="space-y-4">
                {doctors.map((doctor) => (
                    <Card key={doctor.id} className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                                {doctor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-800 text-lg">{doctor.name}</h3>
                                <p className="text-sm text-slate-600 font-medium">{doctor.specialty}</p>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-md">
                                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-bold text-yellow-700">{doctor.rating}</span>
                                    </div>
                                    <span className="text-xs text-slate-500">{doctor.experience}</span>
                                </div>
                                <p className="text-sm font-bold text-blue-600 mt-2">₹{doctor.fee} <span className="text-xs font-normal text-slate-500">consultation</span></p>
                            </div>
                        </div>
                        <div className="flex gap-3 pt-2 border-t border-slate-100">
                            <div className="flex-1 bg-green-50 text-green-700 px-3 py-2.5 rounded-xl text-xs font-semibold text-center flex items-center justify-center">
                                Available {doctor.available}
                            </div>
                            <Button
                                size="sm"
                                className="flex-1"
                                onClick={() => navigate(`/doctor/${doctor.id}`)}
                            >
                                Book Now
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default OPDBooking;
