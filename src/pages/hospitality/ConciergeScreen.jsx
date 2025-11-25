import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Utensils, Bed, Car, Bell, Phone, Coffee, Wifi, Gift } from 'lucide-react';
import Card from '../../components/common/Card';

const ConciergeScreen = () => {
  const navigate = useNavigate();

  const services = [
    { id: 'food', icon: Utensils, title: 'In-Room Dining', desc: 'Gourmet meals delivered', color: 'bg-orange-500', path: '/hospitality/food' },
    { id: 'rooms', icon: Bed, title: 'Suite Booking', desc: 'Upgrade your stay', color: 'bg-indigo-500', path: '/hospitality/rooms' },
    { id: 'valet', icon: Car, title: 'Valet Parking', desc: 'Request car retrieval', color: 'bg-slate-700', path: '/hospitality/valet' },
    { id: 'housekeeping', icon: Bell, title: 'Housekeeping', desc: 'Room cleaning & laundry', color: 'bg-pink-500', path: '/hospitality/housekeeping' },
  ];

  const amenities = [
    { icon: Wifi, label: 'Free Wi-Fi' },
    { icon: Coffee, label: 'Cafe' },
    { icon: Gift, label: 'Gift Shop' },
    { icon: Phone, label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full -ml-12 -mb-12 blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => navigate(-1)} className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold">Concierge Services</h2>
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Experience Premium Care</h1>
          <p className="text-slate-300">Luxury hospitality services at your fingertips.</p>
        </div>
      </div>

      <div className="p-6 -mt-8 relative z-20 space-y-6">
        {/* Main Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <Card 
              key={service.id}
              onClick={() => navigate(service.path)}
              className="hover:shadow-lg transition-all active:scale-95 border-none shadow-md"
            >
              <div className={`${service.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-black/10`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-1">{service.title}</h3>
              <p className="text-xs text-slate-500">{service.desc}</p>
            </Card>
          ))}
        </div>

        {/* Amenities */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 text-lg">Hotel Amenities</h3>
          <div className="flex justify-between bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600">
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-600/20 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1">Presidential Suite</h3>
            <p className="text-sm text-indigo-100 mb-3">Experience world-class comfort during your recovery.</p>
            <button 
              onClick={() => navigate('/hospitality/rooms')}
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-50 transition-colors"
            >
              View Suites
            </button>
          </div>
          <Bed className="absolute right-[-20px] bottom-[-20px] w-32 h-32 text-white opacity-10 rotate-[-15deg]" />
        </div>
      </div>
    </div>
  );
};

export default ConciergeScreen;
