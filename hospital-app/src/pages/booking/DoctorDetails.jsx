import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Star, Clock, MapPin, Award } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const DoctorDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    // Mock data - in real app fetch by ID
    const doctor = {
        name: 'Dr. Sarah Smith',
        specialty: 'Cardiology',
        degree: 'MBBS, MD - Cardiology',
        rating: 4.8,
        reviews: 500,
        experience: '15 years',
        fee: 500,
        about: 'Dr. Sarah Smith is a highly experienced cardiologist with over 15 years of practice. She specializes in preventive cardiology, heart disease management, and cardiac rehabilitation.',
        patients: '500+',
        satisfaction: '98%'
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24 relative">
            {/* Header Image/Gradient */}
            <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 relative rounded-b-[2.5rem] shadow-lg">
                <div className="absolute top-6 left-6">
                    <button onClick={() => navigate(-1)} className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors text-white">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Doctor Info Card */}
            <div className="px-6 -mt-20 relative z-10">
                <Card className="flex flex-col items-center text-center p-6 shadow-xl shadow-blue-900/5 border-none">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg mb-4 -mt-16 border-4 border-white">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-1">{doctor.name}</h2>
                    <p className="text-slate-600 font-medium mb-3">{doctor.degree}</p>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-bold text-yellow-700">{doctor.rating}</span>
                        </div>
                        <span className="text-sm text-slate-400">•</span>
                        <span className="text-sm text-slate-500">{doctor.reviews} Reviews</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full border-t border-slate-100 pt-4">
                        <div>
                            <p className="text-xl font-bold text-blue-600">{doctor.patients}</p>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Patients</p>
                        </div>
                        <div className="border-l border-r border-slate-100">
                            <p className="text-xl font-bold text-green-600">{doctor.experience}</p>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Exp.</p>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-purple-600">₹{doctor.fee}</p>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Fee</p>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="p-6 space-y-6">
                {/* About */}
                <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">About Doctor</h3>
                    <p className="text-slate-600 text-sm leading-relaxed bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        {doctor.about}
                    </p>
                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">Working Hours</h3>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600 font-medium">Monday - Friday</span>
                            <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">09:00 AM - 05:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-600 font-medium">Saturday</span>
                            <span className="font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">09:00 AM - 01:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate(`/book-slot/${id}`)}
                    >
                        Book Appointment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
