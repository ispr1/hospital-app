import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Calendar, Clock, MapPin, Star } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const BookingSummary = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Booking Summary</h2>
                </div>
            </div>

            <div className="p-6 space-y-4">
                {/* Doctor Info */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 border border-blue-200">
                    <div className="flex gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                            SS
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Dr. Sarah Smith</h3>
                            <p className="text-sm text-slate-600">Cardiology Specialist</p>
                            <div className="flex items-center gap-1 mt-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium text-slate-700">4.8</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Appointment Details */}
                <Card>
                    <h3 className="font-semibold text-slate-800 mb-4">Appointment Details</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-2 rounded-lg">
                                <Calendar className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase">Date</p>
                                <p className="font-semibold text-slate-800">November 22, 2024</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-green-50 p-2 rounded-lg">
                                <Clock className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase">Time</p>
                                <p className="font-semibold text-slate-800">10:00 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-orange-50 p-2 rounded-lg">
                                <MapPin className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium uppercase">Location</p>
                                <p className="font-semibold text-slate-800">City Hospital, Main Branch</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Patient Info */}
                <Card>
                    <h3 className="font-semibold text-slate-800 mb-3">Patient Information</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1">
                            <span className="text-slate-600">Name</span>
                            <span className="font-medium text-slate-800">John Doe</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span className="text-slate-600">Age</span>
                            <span className="font-medium text-slate-800">35 years</span>
                        </div>
                        <div className="flex justify-between py-1">
                            <span className="text-slate-600">Phone</span>
                            <span className="font-medium text-slate-800">+91 98765 43210</span>
                        </div>
                    </div>
                </Card>

                {/* Payment Breakdown */}
                <div className="bg-slate-100 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2 text-sm">
                        <span className="text-slate-600">Consultation Fee</span>
                        <span className="font-medium text-slate-800">₹500</span>
                    </div>
                    <div className="flex justify-between items-center mb-2 text-sm">
                        <span className="text-slate-600">Platform Fee</span>
                        <span className="font-medium text-slate-800">₹20</span>
                    </div>
                    <div className="border-t border-slate-200 my-3 pt-3">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-slate-800">Total Amount</span>
                            <span className="font-bold text-blue-600 text-xl">₹520</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate(`/payment/${id}`)}
                    >
                        Proceed to Payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
