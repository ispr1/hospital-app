import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const DoctorRegistration = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 p-6 pb-24">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Doctor Registration</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-slate-800 mb-2">Registration Process</h3>
                <p className="text-sm text-slate-600">Please provide all required documents for verification. Admin will review and approve within 2-3 business days.</p>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <Input label="Full Name *" placeholder="Dr. Full Name" />

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Specialization *</label>
                    <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select Specialization</option>
                        <option>Cardiology</option>
                        <option>Orthopedics</option>
                        <option>Pediatrics</option>
                        <option>General Medicine</option>
                    </select>
                </div>

                <Input label="Medical Registration Number *" placeholder="MCI Registration No." />
                <Input label="Years of Experience *" placeholder="Years" type="number" />
                <Input label="Phone Number *" placeholder="+91 " type="tel" />
                <Input label="Email *" placeholder="doctor@email.com" type="email" />

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Upload Medical Degree *</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600">Click to upload MBBS/MD Certificate</p>
                    </div>
                </div>

                <Button
                    size="lg"
                    className="w-full mt-4"
                    onClick={() => navigate('/doctor/dashboard')}
                >
                    Submit for Approval
                </Button>

                <p className="text-xs text-slate-500 text-center">By submitting, you agree to our Terms & Conditions</p>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                    <p className="text-slate-600 mb-3">Already have an account?</p>
                    <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => navigate('/login')}
                    >
                        Login as Doctor
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DoctorRegistration;
