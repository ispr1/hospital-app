import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CreditCard, Phone, Check, Shield } from 'lucide-react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import clsx from 'clsx';

const Payment = () => {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState('card');

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Payment</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Amount Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
                    <p className="text-sm text-blue-100 mb-1 font-medium">Amount to Pay</p>
                    <p className="text-4xl font-bold">₹520</p>
                </div>

                {/* Payment Methods */}
                <div>
                    <h3 className="font-bold text-slate-800 mb-4">Select Payment Method</h3>
                    <div className="space-y-3">
                        {[
                            { id: 'card', icon: CreditCard, title: 'Credit / Debit Card', desc: 'Visa, Mastercard, Rupay' },
                            { id: 'upi', icon: Phone, title: 'UPI', desc: 'Google Pay, PhonePe, Paytm' },
                            { id: 'wallet', icon: CreditCard, title: 'Wallet', desc: 'Paytm, PhonePe, Amazon Pay' },
                        ].map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setSelectedMethod(method.id)}
                                className={clsx(
                                    'w-full border-2 rounded-xl p-4 transition-all flex items-center gap-4',
                                    selectedMethod === method.id
                                        ? 'border-blue-600 bg-blue-50 shadow-sm'
                                        : 'border-slate-200 bg-white hover:bg-slate-50'
                                )}
                            >
                                <div className={clsx(
                                    'w-12 h-12 rounded-xl flex items-center justify-center transition-colors',
                                    selectedMethod === method.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                                )}>
                                    <method.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 text-left">
                                    <h4 className="font-bold text-slate-800 text-sm">{method.title}</h4>
                                    <p className="text-xs text-slate-500">{method.desc}</p>
                                </div>
                                {selectedMethod === method.id && (
                                    <div className="bg-blue-600 rounded-full p-1">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Card Details Form */}
                {selectedMethod === 'card' && (
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
                        <Input label="Card Number" placeholder="1234 5678 9012 3456" />
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="Expiry" placeholder="MM/YY" />
                            <Input label="CVV" placeholder="123" />
                        </div>
                    </div>
                )}

                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl p-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-xs text-slate-600 font-medium">Your payment is 100% secure and encrypted</p>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate('/booking-confirmation')}
                    >
                        Pay ₹520
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Payment;
