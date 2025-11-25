import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Phone, FileText, Activity } from 'lucide-react';
import Button from '../../components/common/Button';

const LiveConsultation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-900 flex flex-col">
            <div className="p-4 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 right-0 z-10">
                <div className="flex items-center gap-3">
                    <button onClick={() => navigate(-1)} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/30 transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div>
                        <h3 className="font-bold text-white">John Doe</h3>
                        <p className="text-xs text-green-400 flex items-center gap-1">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            In Consultation
                        </p>
                    </div>
                </div>
                <button className="p-3 bg-red-500/20 backdrop-blur-md rounded-full text-red-500 hover:bg-red-500/30 transition-colors">
                    <Phone className="w-5 h-5" />
                </button>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
                <p className="text-white/50">Video Stream Placeholder</p>
                <div className="absolute bottom-4 right-4 w-32 h-48 bg-slate-800 rounded-xl border border-white/10 shadow-lg"></div>
            </div>

            <div className="bg-white rounded-t-3xl p-6 pb-8">
                <div className="grid grid-cols-2 gap-4">
                    <Button
                        onClick={() => navigate('/doctor/prescription/1')}
                        icon={FileText}
                    >
                        Prescription
                    </Button>
                    <Button
                        variant="secondary"
                        icon={Activity}
                    >
                        Notes
                    </Button>
                </div>
                <Button
                    variant="danger"
                    className="w-full mt-4"
                    onClick={() => navigate('/doctor/dashboard')}
                >
                    End Consultation
                </Button>
            </div>
        </div>
    );
};

export default LiveConsultation;
