import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
// import { useAuth } from '../../context/AuthContext'; // Uncomment when Firebase is configured

const LoginScreen = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    // const { sendOtp } = useAuth();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // await sendOtp('+91' + phone);
            // Simulate API call
            setTimeout(() => {
                navigate('/otp-verify', { state: { phone } });
            }, 1500);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center p-6">
            <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">A1</span>
                </div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
                <p className="text-slate-500">Enter your mobile number to login</p>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                    <div className="flex gap-3">
                        <div className="w-20 flex items-center justify-center bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-600">
                            +91
                        </div>
                        <div className="flex-1">
                            <Input
                                type="tel"
                                placeholder="98765 43210"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                maxLength={10}
                                className="text-lg tracking-wide"
                            />
                        </div>
                    </div>
                </div>

                <Button type="submit" isLoading={loading} className="w-full shadow-blue-600/25" size="lg">
                    Get OTP <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </form>

            <div id="recaptcha-container"></div>

            <p className="mt-8 text-center text-xs text-slate-400">
                By continuing, you agree to our <span className="text-blue-600 font-bold">Terms</span> & <span className="text-blue-600 font-bold">Privacy Policy</span>
            </p>
        </div>
    );
};

export default LoginScreen;
