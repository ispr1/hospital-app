import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, Camera, FileText, Check } from 'lucide-react';
import Button from '../../components/common/Button';

const UploadPrescription = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Upload Prescription</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 text-sm mb-1">Valid Prescription Guide</h4>
                        <p className="text-xs text-slate-600">Ensure doctor's name, patient details, and date are clearly visible.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <button className="flex flex-col items-center justify-center gap-3 bg-white p-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all group h-40">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <Camera className="w-6 h-6 text-slate-500 group-hover:text-blue-600" />
                        </div>
                        <span className="font-semibold text-slate-600 text-sm group-hover:text-blue-600">Camera</span>
                    </button>

                    <button className="flex flex-col items-center justify-center gap-3 bg-white p-6 rounded-2xl border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all group h-40">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                            <Upload className="w-6 h-6 text-slate-500 group-hover:text-blue-600" />
                        </div>
                        <span className="font-semibold text-slate-600 text-sm group-hover:text-blue-600">Gallery</span>
                    </button>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-3">Previously Uploaded</h3>
                    <div className="space-y-3">
                        {[1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                                <FileText className="w-8 h-8 text-blue-500" />
                                <div className="flex-1">
                                    <p className="font-semibold text-slate-800 text-sm">Prescription_{i}.jpg</p>
                                    <p className="text-xs text-slate-500">Uploaded on Nov {20 + i}</p>
                                </div>
                                <button className="text-blue-600 text-sm font-bold">Select</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate('/pharmacy/cart')}
                    >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UploadPrescription;
