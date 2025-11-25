import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MobileLayout from './components/layout/MobileLayout';
import Home from './pages/patient/Home';

import SplashScreen from './pages/auth/SplashScreen';
import OnboardingScreen from './pages/auth/OnboardingScreen';

import Consultation from './pages/services/Consultation';
import HomeCheckup from './pages/services/HomeCheckup';
import Rentals from './pages/services/Rentals';
import Ambulance from './pages/services/Ambulance';

import Profile from './pages/user/Profile';
import MyBookings from './pages/user/MyBookings';
import Notifications from './pages/user/Notifications';

import DoctorDashboard from './pages/doctor/DoctorDashboard';
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import PatientDetails from './pages/doctor/PatientDetails';
import LiveConsultation from './pages/doctor/LiveConsultation';
import DoctorRegistration from './pages/doctor/DoctorRegistration';

import OPDBooking from './pages/booking/OPDBooking';
import DoctorDetails from './pages/booking/DoctorDetails';
import TimeSlots from './pages/booking/TimeSlots';
import BookingSummary from './pages/booking/BookingSummary';
import Payment from './pages/booking/Payment';
import Confirmation from './pages/booking/Confirmation';

import Prescription from './pages/doctor/Prescription';
import DoctorProfile from './pages/doctor/DoctorProfile';
import MedicalRecords from './pages/user/MedicalRecords';
import UploadReport from './pages/user/UploadReport';

import PharmacyHome from './pages/pharmacy/PharmacyHome';
import UploadPrescription from './pages/pharmacy/UploadPrescription';
import Cart from './pages/pharmacy/Cart';
import HealthTipsFeed from './pages/health/HealthTipsFeed';
import TipDetails from './pages/health/TipDetails';

import LoginScreen from './pages/auth/LoginScreen';
import OTPScreen from './pages/auth/OTPScreen';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<OnboardingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/otp-verify" element={<OTPScreen />} />

        {/* Doctor Routes */}
        <Route path="/doctor/login" element={<DoctorRegistration />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/patient/:id" element={<PatientDetails />} />
        <Route path="/doctor/consultation/:id" element={<LiveConsultation />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/prescription/:id" element={<Prescription />} />

        {/* Booking Flow - No Bottom Nav */}
        {/* Booking Flow Steps */}
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/book-slot/:id" element={<TimeSlots />} />
        <Route path="/booking-summary/:id" element={<BookingSummary />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/booking-confirmation" element={<Confirmation />} />

        {/* Pharmacy & Health - No Bottom Nav */}
        <Route path="/pharmacy/upload-prescription" element={<UploadPrescription />} />
        <Route path="/pharmacy/cart" element={<Cart />} />
        <Route path="/health/tip/:id" element={<TipDetails />} />

        {/* User - No Bottom Nav for details, but Profile has nav */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/medical-records" element={<MedicalRecords />} />
        <Route path="/upload-report" element={<UploadReport />} />
        <Route path="/booking/:id" element={<div>Booking Details Placeholder</div>} />

        <Route element={<MobileLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<div>Search</div>} />
          <Route path="/pharmacy" element={<PharmacyHome />} />
          <Route path="/health" element={<HealthTipsFeed />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/profile" element={<Profile />} />

          {/* Services with Bottom Nav */}
          <Route path="/opd" element={<OPDBooking />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/home-checkup" element={<HomeCheckup />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/ambulance" element={<Ambulance />} />

          {/* Booking Flow - Keep Bottom Nav for better UX? Or keep separate? User asked for nav buttons visible */}
          {/* Let's keep Booking Flow separate as it's a linear process, but Services should definitely have nav */}
        </Route>
      </Routes>
    </Router>
    // </AuthProvider>
  );
}

export default App;
