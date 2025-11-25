import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Home, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-full mb-8 shadow-xl shadow-green-500/30"
            >
                <Check className="w-16 h-16 text-white" />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold text-slate-800 mb-3">Booking Confirmed!</h2>
                <p className="text-slate-600 mb-8 text-lg">Your appointment has been successfully booked</p>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-slate-50 rounded-2xl p-6 mb-8 w-full border border-slate-100"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">
                        SS
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold text-slate-800 text-lg">Dr. Sarah Smith</h3>
                        <p className="text-sm text-slate-600">Cardiology</p>
                    </div>
                </div>
                <div className="space-y-3 text-sm border-t border-slate-200 pt-4">
                    <div className="flex justify-between">
                        <span className="text-slate-600">Date</span>
                        <span className="font-bold text-slate-800">Nov 22, 2024</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-600">Time</span>
                        <span className="font-bold text-slate-800">10:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-600">Booking ID</span>
                        <span className="font-bold text-blue-600">#BK12345</span>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4 w-full"
            >
                <Button
                    variant="secondary"
                    onClick={() => navigate('/bookings')}
                    icon={Calendar}
                >
                    View Booking
                </Button>
                <Button
                    onClick={() => navigate('/home')}
                    icon={Home}
                >
                    Go Home
                </Button>
            </motion.div>
        </div>
    );
};

export default Confirmation;
