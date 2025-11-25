import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowRight, RefreshCw } from 'lucide-react';
import Button from '../../components/common/Button';

const OTPScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const phone = location.state?.phone || '9876543210';

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            navigate('/home');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-center p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">Verification Code</h1>
                <p className="text-slate-500">
                    We have sent the code verification to <br />
                    <span className="font-bold text-slate-900">+91 {phone}</span>
                </p>
            </div>

            <form onSubmit={handleVerify} className="space-y-8">
                <div className="flex justify-between gap-2">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            className="w-12 h-14 bg-slate-50 border border-slate-200 rounded-xl text-center text-xl font-bold text-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            value={data}
                            onChange={(e) => handleChange(e.target, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>

                <div className="text-center">
                    {timer > 0 ? (
                        <p className="text-sm text-slate-500">Resend code in <span className="font-bold text-blue-600">00:{timer < 10 ? `0${timer}` : timer}</span></p>
                    ) : (
                        <button type="button" className="flex items-center justify-center gap-2 text-sm font-bold text-blue-600 mx-auto hover:text-blue-700">
                            <RefreshCw className="w-4 h-4" /> Resend Code
                        </button>
                    )}
                </div>

                <Button type="submit" isLoading={loading} className="w-full shadow-blue-600/25" size="lg">
                    Verify & Proceed <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </form>
        </div>
    );
};

export default OTPScreen;
