import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Ambulance as AmbulanceIcon, Phone, MapPin } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Card from '../../components/common/Card';

const Ambulance = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Emergency Ambulance</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white shadow-lg shadow-red-600/20">
                    <AmbulanceIcon className="w-12 h-12 mb-3" />
                    <h3 className="font-bold text-xl mb-2">24/7 Emergency Service</h3>
                    <p className="text-sm text-red-100 mb-4">Average response time: 8-12 minutes</p>
                    <Button variant="secondary" className="w-full text-red-600 hover:bg-red-50" icon={Phone}>
                        Call Ambulance Now
                    </Button>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Choose Ambulance Type</h3>
                    <div className="space-y-3">
                        <Card className="border-2 border-red-600 bg-red-50/50">
                            <div className="mb-2">
                                <h4 className="font-bold text-slate-800">Advanced Life Support (ALS)</h4>
                                <p className="text-sm text-slate-600 mt-1">Equipped with ventilators, monitors, and trained paramedics</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-blue-600">₹3000</span>
                                <Button size="sm" className="bg-red-600 hover:bg-red-700 shadow-red-600/20">
                                    Book ALS
                                </Button>
                            </div>
                        </Card>

                        <Card>
                            <div className="mb-2">
                                <h4 className="font-bold text-slate-800">Basic Life Support (BLS)</h4>
                                <p className="text-sm text-slate-600 mt-1">Standard ambulance with basic medical equipment</p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xl font-bold text-blue-600">₹1500</span>
                                <Button size="sm" className="bg-red-600 hover:bg-red-700 shadow-red-600/20">
                                    Book BLS
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Pickup Location</h4>
                    <Input icon={MapPin} placeholder="Enter pickup address" className="border-red-200 focus:ring-red-500" />
                </div>
            </div>
        </div>
    );
};

export default Ambulance;
