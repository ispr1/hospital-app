import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Video, ChevronRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Consultation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Online Consultation</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                    <Video className="w-12 h-12 text-green-600 mb-3" />
                    <h3 className="font-bold text-slate-800 mb-2">Consult from Home</h3>
                    <p className="text-sm text-slate-600">Connect with doctors via video call. Available 24/7 for your convenience.</p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Choose Consultation Type</h3>
                    <div className="space-y-3">
                        <Card className="flex items-center justify-between border-2 border-blue-600 bg-blue-50">
                            <div>
                                <h4 className="font-semibold text-slate-800">Instant Consultation</h4>
                                <p className="text-sm text-slate-600">Connect with available doctor now</p>
                            </div>
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                5 mins
                            </div>
                        </Card>
                        <Card className="flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold text-slate-800">Schedule Appointment</h4>
                                <p className="text-sm text-slate-600">Book a specific time slot</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                        </Card>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Online Now</h3>
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <Card key={i} className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full"></div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-800 text-sm">Dr. Professional {i}</h4>
                                    <p className="text-xs text-slate-600">General Physician</p>
                                </div>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700 shadow-green-600/20">
                                    Connect
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
