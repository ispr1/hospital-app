import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Upload, ChevronRight, Plus, Pill, Heart, Activity } from 'lucide-react';
import Input from '../../components/common/Input';
import Card from '../../components/common/Card';

const PharmacyHome = () => {
    const navigate = useNavigate();

    const categories = [
        { id: 'prescriptions', name: 'Medicines', icon: Pill, color: 'bg-blue-100 text-blue-600' },
        { id: 'wellness', name: 'Wellness', icon: Heart, color: 'bg-green-100 text-green-600' },
        { id: 'devices', name: 'Devices', icon: Activity, color: 'bg-orange-100 text-orange-600' },
        { id: 'baby', name: 'Baby Care', icon: Heart, color: 'bg-pink-100 text-pink-600' },
    ];

    const popularProducts = [
        { id: 1, name: 'Paracetamol 500mg', price: 30, type: 'Tablet', image: 'bg-slate-200' },
        { id: 2, name: 'Vitamin C Serum', price: 450, type: 'Wellness', image: 'bg-orange-100' },
        { id: 3, name: 'Digital Thermometer', price: 299, type: 'Device', image: 'bg-blue-100' },
        { id: 4, name: 'Protein Powder', price: 1200, type: 'Fitness', image: 'bg-slate-200' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Header */}
            <div className="bg-white p-6 sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Pharmacy</h2>
                        <p className="text-sm text-slate-500">24/7 Medicine Delivery</p>
                    </div>
                    <button
                        onClick={() => navigate('/pharmacy/cart')}
                        className="p-2 bg-blue-50 rounded-full relative hover:bg-blue-100 transition-colors"
                    >
                        <ShoppingCart className="w-6 h-6 text-blue-600" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold border-2 border-white">2</span>
                    </button>
                </div>
                <Input icon={Search} placeholder="Search medicines, products..." />
            </div>

            <div className="p-6 space-y-6">
                {/* Upload Prescription Banner */}
                <div
                    onClick={() => navigate('/pharmacy/upload-prescription')}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20 relative overflow-hidden cursor-pointer active:scale-95 transition-transform"
                >
                    <div className="relative z-10">
                        <h3 className="font-bold text-lg mb-1">Order via Prescription</h3>
                        <p className="text-sm text-blue-100 mb-3">Upload Rx and we'll do the rest</p>
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Upload Now
                        </button>
                    </div>
                    <Upload className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-white opacity-10 rotate-[-15deg]" />
                </div>

                {/* Categories */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-800">Shop by Category</h3>
                        <button className="text-sm text-blue-600 font-semibold">View All</button>
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {categories.map((cat) => (
                            <div key={cat.id} className="flex flex-col items-center gap-2 cursor-pointer">
                                <div className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                                    <cat.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-medium text-slate-600 text-center leading-tight">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Products */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Popular Products</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {popularProducts.map((product) => (
                            <Card key={product.id} className="p-3 flex flex-col h-full">
                                <div className={`h-24 ${product.image} rounded-xl mb-3 flex items-center justify-center`}>
                                    {/* Placeholder for product image */}
                                    <Pill className="w-8 h-8 text-slate-400 opacity-50" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-500 mb-1">{product.type}</p>
                                    <h4 className="font-bold text-slate-800 text-sm mb-1 line-clamp-2">{product.name}</h4>
                                    <div className="flex justify-between items-end mt-2">
                                        <span className="font-bold text-slate-800">₹{product.price}</span>
                                        <button className="p-1.5 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors shadow-blue-600/20">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PharmacyHome;
