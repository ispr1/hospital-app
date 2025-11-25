import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Check } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const PatientDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Patient Details</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                        JD
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">John Doe</h3>
                        <p className="text-sm text-slate-600">35 years, Male</p>
                        <p className="text-sm text-slate-600">+91 98765 43210</p>
                    </div>
                </div>

                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Appointment Info</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-600">Date</span>
                            <span className="font-medium text-slate-800">Nov 22, 2024</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Time</span>
                            <span className="font-medium text-slate-800">10:00 AM</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600">Type</span>
                            <span className="font-medium text-slate-800">OPD</span>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Chief Complaint</h3>
                    <p className="text-sm text-slate-600">Chest pain and shortness of breath for 2 days</p>
                </Card>

                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Medical History</h3>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-slate-600">Hypertension</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-slate-600">Diabetes Type 2</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate('/doctor/consultation/1')}
                    >
                        Start Consultation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PatientDetails;
