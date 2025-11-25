import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, X, Plus } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Card from '../../components/common/Card';

const Prescription = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Write Prescription</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <h3 className="font-semibold text-slate-800">Patient: John Doe</h3>
                    <p className="text-sm text-slate-600">35 years, Male</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Diagnosis</label>
                        <textarea
                            placeholder="Enter diagnosis..."
                            rows="2"
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Medications</label>
                        <div className="space-y-2 mb-3">
                            <Card className="flex justify-between items-start">
                                <div>
                                    <p className="font-medium text-slate-800">Tab. Aspirin 75mg</p>
                                    <p className="text-sm text-slate-600">1-0-1 • After food • 30 days</p>
                                </div>
                                <button className="text-red-500 hover:text-red-600 p-1">
                                    <X className="w-4 h-4" />
                                </button>
                            </Card>
                        </div>
                        <Button variant="secondary" size="sm" className="w-full" icon={Plus}>
                            Add Medicine
                        </Button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Lab Tests</label>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                ECG
                                <button className="text-red-500"><X className="w-3 h-3" /></button>
                            </span>
                            <span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                                Blood Sugar
                                <button className="text-red-500"><X className="w-3 h-3" /></button>
                            </span>
                        </div>
                        <Button variant="secondary" size="sm" className="w-full" icon={Plus}>
                            Add Test
                        </Button>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Notes</label>
                        <textarea
                            placeholder="Additional notes..."
                            rows="3"
                            className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Follow-up</label>
                        <select className="w-full px-4 py-3 bg-white rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>1 week</option>
                            <option>2 weeks</option>
                            <option>1 month</option>
                            <option>3 months</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate('/doctor/dashboard')}
                    >
                        Save & Send to Patient
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Prescription;
