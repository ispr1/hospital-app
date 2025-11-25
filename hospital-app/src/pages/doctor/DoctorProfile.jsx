import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Star, LogOut } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const DoctorProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl shadow-inner">
                            SS
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">Dr. Sarah Smith</h3>
                            <p className="text-blue-100 text-sm">MBBS, MD - Cardiology</p>
                            <div className="flex items-center gap-1 mt-1 bg-white/10 px-2 py-0.5 rounded-lg w-fit">
                                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">4.8 (500+ reviews)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Professional Details</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1 border-b border-slate-50">
                            <span className="text-slate-600">Registration No.</span>
                            <span className="font-medium text-slate-800">MH12345</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-slate-50">
                            <span className="text-slate-600">Experience</span>
                            <span className="font-medium text-slate-800">15 years</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span className="text-slate-600">Consultation Fee</span>
                            <span className="font-medium text-slate-800">₹500</span>
                        </div>
                    </div>
                </Card>

                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Contact</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1 border-b border-slate-50">
                            <span className="text-slate-600">Email</span>
                            <span className="font-medium text-slate-800">sarah@hospital.com</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span className="text-slate-600">Phone</span>
                            <span className="font-medium text-slate-800">+91 98765 43210</span>
                        </div>
                    </div>
                </Card>

                <Button variant="secondary" className="w-full">
                    Edit Profile
                </Button>

                <Button variant="danger" className="w-full bg-red-50 text-red-600 hover:bg-red-100 shadow-none border border-red-100" icon={LogOut}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default DoctorProfile;
