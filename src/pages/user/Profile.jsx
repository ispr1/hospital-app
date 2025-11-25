import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar, FileText, User, Activity, ChevronRight, LogOut } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const Profile = () => {
    const navigate = useNavigate();

    const menuItems = [
        { icon: Calendar, label: 'My Bookings', sub: 'View all appointments', path: '/bookings', color: 'bg-blue-100 text-blue-600' },
        { icon: FileText, label: 'Medical Records', sub: 'Reports & prescriptions', path: '/medical-records', color: 'bg-green-100 text-green-600' },
        { icon: User, label: 'Family Members', sub: 'Manage family profiles', path: '/family', color: 'bg-purple-100 text-purple-600' },
        { icon: Activity, label: 'Settings', sub: 'App preferences', path: '/settings', color: 'bg-slate-100 text-slate-600' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">Profile</h2>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-600/20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-2xl shadow-inner">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">John Doe</h3>
                            <p className="text-blue-100 text-sm">john.doe@email.com</p>
                            <p className="text-blue-100 text-sm">+91 98765 43210</p>
                        </div>
                    </div>
                    <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors border border-white/20">
                        Edit Profile
                    </button>
                </div>

                <div className="space-y-3">
                    {menuItems.map((item, idx) => (
                        <Card
                            key={idx}
                            onClick={() => navigate(item.path)}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${item.color}`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-slate-800">{item.label}</h4>
                                    <p className="text-xs text-slate-500">{item.sub}</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-slate-400" />
                        </Card>
                    ))}
                </div>

                <Button variant="danger" className="w-full bg-red-50 text-red-600 hover:bg-red-100 shadow-none border border-red-100" icon={LogOut}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Profile;
