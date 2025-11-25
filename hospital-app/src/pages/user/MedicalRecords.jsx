import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload, FileText, Download, Shield } from 'lucide-react';
import Card from '../../components/common/Card';

const MedicalRecords = () => {
    const navigate = useNavigate();

    const records = [
        { name: 'Blood Test Report', date: 'Nov 15, 2024', type: 'Lab Report', size: '2.4 MB' },
        { name: 'X-Ray Chest', date: 'Nov 10, 2024', type: 'Imaging', size: '5.1 MB' },
        { name: 'Prescription', date: 'Nov 8, 2024', type: 'Prescription', size: '0.8 MB' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Medical Records</h2>
                </div>
                <button onClick={() => navigate('/upload-report')} className="p-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors">
                    <Upload className="w-5 h-5 text-blue-600" />
                </button>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20 flex items-center justify-between">
                    <div>
                        <h3 className="font-bold text-lg mb-1">Secure Storage</h3>
                        <p className="text-sm text-blue-100">All your medical records in one place</p>
                    </div>
                    <Shield className="w-12 h-12 text-blue-200 opacity-50" />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {['All', 'Lab Reports', 'Prescriptions', 'Imaging'].map((tab) => (
                        <button key={tab} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${tab === 'All' ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-white text-slate-600 border border-slate-200'
                            }`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-3">
                    {records.map((record, idx) => (
                        <Card key={idx} className="flex items-center gap-3">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-semibold text-slate-800">{record.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs text-slate-500">{record.date}</span>
                                    <span className="text-xs text-slate-300">•</span>
                                    <span className="text-xs text-slate-500">{record.size}</span>
                                </div>
                                <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase tracking-wide">
                                    {record.type}
                                </span>
                            </div>
                            <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                <Download className="w-5 h-5 text-slate-400" />
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicalRecords;
