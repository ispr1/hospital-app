import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../components/common/Button';

const OnboardingScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen p-6 bg-white">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-full mb-8 relative"
                >
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
                    <Stethoscope className="w-24 h-24 text-blue-600 relative z-10" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
                        Complete Healthcare <br />
                        <span className="text-blue-600">at Your Doorstep</span>
                    </h2>
                    <p className="text-slate-600 mb-8 px-4 leading-relaxed">
                        Book appointments, consultations, home checkups, and emergency services - all in one place.
                    </p>
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex gap-2 mb-8">
                    <div className="w-8 h-2 bg-blue-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                </div>
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-4"
            >
                <Button
                    onClick={() => navigate('/login')}
                    size="lg"
                    className="w-full shadow-blue-500/25"
                    icon={User}
                >
                    Continue as Patient
                </Button>
                <Button
                    onClick={() => navigate('/doctor/login')}
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    icon={Stethoscope}
                >
                    Continue as Doctor
                </Button>
            </motion.div>
        </div>
    );
};

export default OnboardingScreen;
