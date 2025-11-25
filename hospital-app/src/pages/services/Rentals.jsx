import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Activity } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Rentals = () => {
    const navigate = useNavigate();

    const equipment = [
        { name: 'Oxygen Cylinder', price: 500, per: 'day', available: true },
        { name: 'ECG Machine', price: 1000, per: 'day', available: true },
        { name: 'Nebulizer', price: 300, per: 'day', available: true },
        { name: 'Wheelchair', price: 200, per: 'day', available: false }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Equipment Rentals</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex gap-3">
                    <Activity className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">Free Delivery & Setup</h4>
                        <p className="text-xs text-slate-600">Our team will deliver and set up the equipment at your location</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {equipment.map((item, idx) => (
                        <Card key={idx} className="flex flex-col">
                            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 mb-3 flex items-center justify-center">
                                <Activity className="w-10 h-10 text-orange-600" />
                            </div>
                            <h4 className="font-semibold text-slate-800 text-sm mb-2">{item.name}</h4>
                            <div className="text-lg font-bold text-blue-600 mb-3">₹{item.price}<span className="text-xs text-slate-500 font-normal">/{item.per}</span></div>
                            <div className="mt-auto">
                                {item.available ? (
                                    <Button size="sm" className="w-full text-xs py-2">
                                        Rent Now
                                    </Button>
                                ) : (
                                    <div className="w-full bg-slate-100 text-slate-500 py-2 rounded-lg text-xs font-semibold text-center">
                                        Not Available
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rentals;
