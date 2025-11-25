import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Check, Clock, User, ChevronRight, Activity } from 'lucide-react';
import Card from '../../components/common/Card';

const DoctorDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
                <div>
                    <h3 className="text-sm text-slate-500">Welcome back,</h3>
                    <h2 className="text-2xl font-bold text-slate-800">Dr. Sarah Smith</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 text-center">
                        <Calendar className="w-6 h-6 text-blue-600 mb-2 mx-auto" />
                        <p className="text-2xl font-bold text-slate-800">8</p>
                        <p className="text-xs text-slate-600">Today</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 text-center">
                        <Check className="w-6 h-6 text-green-600 mb-2 mx-auto" />
                        <p className="text-2xl font-bold text-slate-800">45</p>
                        <p className="text-xs text-slate-600">Done</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 text-center">
                        <Clock className="w-6 h-6 text-orange-600 mb-2 mx-auto" />
                        <p className="text-2xl font-bold text-slate-800">3</p>
                        <p className="text-xs text-slate-600">Pending</p>
                    </div>
                </div>

                <div className="bg-blue-600 rounded-xl p-4 text-white shadow-lg shadow-blue-600/20">
                    <h3 className="font-bold mb-2">Next Appointment</h3>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                            JD
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-blue-100">10:00 AM - OPD</p>
                        </div>
                        <button
                            onClick={() => navigate('/doctor/patient/1')}
                            className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Start
                        </button>
                    </div>
                </div>

                <div className="space-y-3">
                    <Card onClick={() => navigate('/doctor/appointments')} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-slate-800">My Appointments</h4>
                                <p className="text-xs text-slate-500">View all bookings</p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Card>

                    <Card className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <Activity className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-slate-800">Availability</h4>
                                <p className="text-xs text-slate-500">Manage schedule</p>
                            </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
