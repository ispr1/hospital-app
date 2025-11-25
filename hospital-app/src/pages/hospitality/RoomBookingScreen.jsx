import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Wifi, Tv, Coffee, Star, Check, Users } from 'lucide-react';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';

const RoomBookingScreen = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('deluxe');

  const rooms = [
    {
      id: 'deluxe',
      name: 'Deluxe Private Room',
      price: 5000,
      size: '350 sq.ft',
      occupancy: '1 Patient + 1 Attendant',
      features: ['Electric Bed', 'Sofa Bed for Attendant', 'Private Washroom', 'Smart TV', 'Free Wi-Fi'],
      image: 'bg-blue-100' // Placeholder for image
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      price: 12000,
      size: '600 sq.ft',
      occupancy: '1 Patient + 2 Attendants',
      features: ['Separate Living Area', 'Kitchenette', '2 Recliners', 'Premium Dining Menu', 'Personal Nurse'],
      image: 'bg-purple-100' // Placeholder for image
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="bg-white p-6 border-b border-slate-100 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <h2 className="text-2xl font-bold text-slate-800">Book a Room</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Room Type Selection */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {rooms.map((room) => (
            <div 
              key={room.id}
              onClick={() => setSelectedType(room.id)}
              className={`min-w-[85%] snap-center rounded-3xl overflow-hidden border-2 transition-all cursor-pointer ${
                selectedType === room.id ? 'border-blue-600 shadow-xl scale-[1.02]' : 'border-transparent shadow-md scale-100'
              }`}
            >
              <div className={`h-48 ${room.image} relative`}>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
                  <h3 className="text-white font-bold text-xl">{room.name}</h3>
                  <p className="text-white/90 text-sm">{room.size}</p>
                </div>
              </div>
              <div className="bg-white p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">₹{room.price}</span>
                    <span className="text-sm text-slate-500"> / night</span>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-yellow-700">5.0</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Users className="w-4 h-4 text-blue-500" />
                    {room.occupancy}
                  </div>
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-col items-center gap-1 text-xs text-slate-500">
                    <Wifi className="w-5 h-5 text-slate-400" />
                    Wifi
                  </div>
                  <div className="flex flex-col items-center gap-1 text-xs text-slate-500">
                    <Tv className="w-5 h-5 text-slate-400" />
                    TV
                  </div>
                  <div className="flex flex-col items-center gap-1 text-xs text-slate-500">
                    <Coffee className="w-5 h-5 text-slate-400" />
                    Dining
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Date Selection Placeholder */}
        <Card>
          <h3 className="font-bold text-slate-800 mb-3">Select Dates</h3>
          <div className="flex gap-4">
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Check-in</p>
              <p className="font-semibold text-slate-800">Nov 24, 2024</p>
            </div>
            <div className="flex-1 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Check-out</p>
              <p className="font-semibold text-slate-800">Nov 26, 2024</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50">
        <div className="max-w-md mx-auto flex gap-4 items-center">
          <div className="flex-1">
            <p className="text-sm text-slate-500">Total Price</p>
            <p className="text-xl font-bold text-slate-800">₹{selectedType === 'deluxe' ? '10,000' : '24,000'}</p>
          </div>
          <Button 
            size="lg" 
            className="flex-1 shadow-blue-600/25"
            onClick={() => navigate('/booking-confirmation')} // Reusing confirmation for demo
          >
            Book Room
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoomBookingScreen;
