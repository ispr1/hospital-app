import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Share2, Bookmark, Heart, Clock, User } from 'lucide-react';
import Button from '../../components/common/Button';

const TipDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white pb-24">
            {/* Hero Image */}
            <div className="h-64 bg-slate-200 relative">
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                    <button onClick={() => navigate(-1)} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex gap-3">
                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                            <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-6 -mt-8 relative z-10 bg-white rounded-t-[2rem] pt-8">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Nutrition</span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 5 min read
                    </span>
                </div>

                <h1 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">10 Superfoods for a Healthy Heart</h1>

                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-800">Dr. Sarah Smith</p>
                            <p className="text-xs text-slate-500">Cardiologist</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-1 text-slate-500 text-sm bg-slate-50 px-3 py-1.5 rounded-full">
                        <Heart className="w-4 h-4" /> 120
                    </button>
                </div>

                <div className="prose prose-slate prose-sm max-w-none text-slate-600">
                    <p className="mb-4">
                        Maintaining a healthy heart is crucial for overall well-being. Incorporating nutrient-rich foods into your diet can significantly reduce the risk of cardiovascular diseases. Here are 10 superfoods you should add to your plate:
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">1. Leafy Green Vegetables</h3>
                    <p className="mb-4">
                        Spinach, kale, and collard greens are well-known for their wealth of vitamins, minerals, and antioxidants. They're particularly high in vitamin K, which helps protect your arteries and promote proper blood clotting.
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">2. Whole Grains</h3>
                    <p className="mb-4">
                        Whole grains include all three nutrient-rich parts of the grain: germ, endosperm, and bran. Common types include whole wheat, brown rice, oats, rye, barley, buckwheat, and quinoa.
                    </p>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">3. Berries</h3>
                    <p className="mb-4">
                        Strawberries, blueberries, blackberries, and raspberries are jam-packed with important nutrients that play a central role in heart health. Berries are also rich in antioxidants like anthocyanins, which protect against the oxidative stress and inflammation that contribute to the development of heart disease.
                    </p>
                </div>

                <div className="mt-8 mb-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                    <h3 className="font-bold text-slate-800 mb-2">Need Heart Advice?</h3>
                    <p className="text-sm text-slate-600 mb-4">Book a consultation with our expert cardiologists today.</p>
                    <Button onClick={() => navigate('/opd')}>Book Appointment</Button>
                </div>
            </div>
        </div>
    );
};

export default TipDetails;
