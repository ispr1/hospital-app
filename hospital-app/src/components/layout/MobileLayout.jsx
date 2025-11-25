import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNav from './BottomNav';

const MobileLayout = () => {
    const location = useLocation();

    // Hide BottomNav on specific screens if needed, but user requested consistency
    // so we'll keep it visible on most screens.
    const hideNavRoutes = ['/booking-confirmation', '/login', '/otp-verify', '/onboarding', '/'];
    const showNav = !hideNavRoutes.includes(location.pathname);

    return (
        <div className="min-h-screen bg-slate-50 max-w-md mx-auto relative shadow-2xl overflow-hidden">
            <div className="h-full overflow-y-auto pb-20 scrollbar-hide">
                <Outlet />
            </div>
            {showNav && <BottomNav />}
        </div>
    );
};

export default MobileLayout;
