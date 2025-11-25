import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Check } from 'lucide-react';
import Button from '../../components/common/Button';
import clsx from 'clsx';

const TimeSlots = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedDate, setSelectedDate] = useState('Nov 22');
    const [selectedTime, setSelectedTime] = useState('10:00 AM');

    const dates = ['Nov 21', 'Nov 22', 'Nov 23', 'Nov 24', 'Nov 25'];
    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 pb-4 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2 mb-4">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Select Time Slot</h2>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        SS
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">Dr. Sarah Smith</h3>
                        <p className="text-sm text-slate-600">Cardiology</p>
                    </div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Date Selection */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-3">Select Date</h3>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {dates.map((date) => (
                            <button
                                key={date}
                                onClick={() => setSelectedDate(date)}
                                className={clsx(
                                    'flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all',
                                    selectedDate === date
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                                        : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                                )}
                            >
                                {date}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time Selection */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-3">Available Slots</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={clsx(
                                    'py-3 rounded-xl font-medium transition-all text-sm',
                                    selectedTime === time
                                        ? 'bg-green-600 text-white shadow-lg shadow-green-600/20 scale-105'
                                        : 'bg-white text-slate-700 border border-slate-200 hover:border-green-300'
                                )}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Selected Summary */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                    <div className="flex items-start gap-3">
                        <div className="bg-white p-1 rounded-full">
                            <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">Selected Slot</h4>
                            <p className="text-sm text-slate-600">{selectedDate}, 2024 at {selectedTime}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate(`/booking-summary/${id}`)}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TimeSlots;
