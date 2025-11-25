import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Upload } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const UploadReport = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Upload Report</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl p-8 text-center cursor-pointer hover:bg-blue-100 transition-colors group">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Upload Medical Records</h3>
                    <p className="text-sm text-slate-600 mb-4">Drag and drop files or click to browse</p>
                    <p className="text-xs text-slate-500 font-medium">Supported: PDF, JPG, PNG (Max 10 MB)</p>
                </div>

                <div className="space-y-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Report Type</label>
                        <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Lab Report</option>
                            <option>Prescription</option>
                            <option>Imaging (X-Ray, MRI, CT Scan)</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <Input label="Report Name" placeholder="e.g., Blood Test Report" />
                    <Input label="Date" type="date" />

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Notes (Optional)</label>
                        <textarea
                            placeholder="Add any additional notes..."
                            rows="3"
                            className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    <Button size="lg" className="w-full shadow-blue-600/25">
                        Upload Report
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default UploadReport;
