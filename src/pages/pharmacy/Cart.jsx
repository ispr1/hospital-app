import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, Plus, Minus, MapPin } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Cart = () => {
    const navigate = useNavigate();

    const items = [
        { id: 1, name: 'Paracetamol 500mg', price: 30, qty: 2, type: 'Tablet' },
        { id: 2, name: 'Vitamin C Serum', price: 450, qty: 1, type: 'Wellness' }
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-32">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">My Cart</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Address */}
                <Card className="flex items-center gap-3 bg-blue-50 border-blue-100">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium uppercase">Deliver to</p>
                        <p className="font-bold text-slate-800 text-sm truncate">Home - 123, Green Valley, City</p>
                    </div>
                    <button className="text-blue-600 text-sm font-bold">Change</button>
                </Card>

                {/* Items */}
                <div className="space-y-4">
                    {items.map((item) => (
                        <Card key={item.id} className="flex gap-4">
                            <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 text-sm mb-1">{item.name}</h4>
                                <p className="text-xs text-slate-500 mb-2">{item.type}</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-slate-800">₹{item.price * item.qty}</span>
                                    <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                                        <button className="p-1 hover:bg-white rounded-md transition-colors shadow-sm">
                                            <Minus className="w-3 h-3 text-slate-600" />
                                        </button>
                                        <span className="text-xs font-bold text-slate-800 w-4 text-center">{item.qty}</span>
                                        <button className="p-1 hover:bg-white rounded-md transition-colors shadow-sm">
                                            <Plus className="w-3 h-3 text-slate-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Bill Details */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100 space-y-2">
                    <h3 className="font-bold text-slate-800 mb-2">Bill Summary</h3>
                    <div className="flex justify-between text-sm text-slate-600">
                        <span>Item Total</span>
                        <span>₹510</span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-600">
                        <span>Delivery Fee</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <div className="border-t border-slate-100 pt-2 mt-2 flex justify-between font-bold text-slate-800">
                        <span>To Pay</span>
                        <span>₹510</span>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
                <div className="max-w-md mx-auto">
                    <Button
                        size="lg"
                        className="w-full shadow-blue-600/25"
                        onClick={() => navigate('/payment/pharmacy')}
                    >
                        Proceed to Pay ₹510
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
