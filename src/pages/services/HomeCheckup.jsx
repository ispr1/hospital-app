import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Home } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const HomeCheckup = () => {
    const navigate = useNavigate();

    const packages = [
        { name: 'Basic Health', tests: 25, price: 799, duration: '1 hour' },
        { name: 'Comprehensive', tests: 50, price: 1499, duration: '2 hours' },
        { name: 'Premium Care', tests: 80, price: 2499, duration: '3 hours' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Home Health Checkup</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-lg shadow-purple-600/20">
                    <Home className="w-10 h-10 mb-3" />
                    <h3 className="font-bold text-lg mb-1">Sample Collection at Home</h3>
                    <p className="text-sm text-purple-100">Certified nurses will visit your location for sample collection</p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Popular Packages</h3>
                    <div className="space-y-4">
                        {packages.map((pkg, idx) => (
                            <Card key={idx}>
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-lg">{pkg.name}</h4>
                                        <p className="text-sm text-slate-600">{pkg.tests} tests included</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-blue-600">₹{pkg.price}</div>
                                        <div className="text-xs text-slate-500">{pkg.duration}</div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="secondary" size="sm" className="flex-1">
                                        View Details
                                    </Button>
                                    <Button size="sm" className="flex-1">
                                        Book Now
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <Button variant="secondary" className="w-full text-purple-600 border-purple-200 bg-purple-50 hover:bg-purple-100">
                    Create Custom Package
                </Button>
            </div>
        </div>
    );
};

export default HomeCheckup;
