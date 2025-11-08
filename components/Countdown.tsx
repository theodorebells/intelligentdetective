
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const COUNTDOWN_DURATION_MS = 10 * 60 * 1000; // Changed to 10 minutes
        const EXPIRY_KEY = 'detectiveBookExpiry';

        const getExpiryTime = () => {
            let expiryTime = localStorage.getItem(EXPIRY_KEY);

            if (!expiryTime || isNaN(parseInt(expiryTime))) {
                const newExpiryTime = new Date().getTime() + COUNTDOWN_DURATION_MS;
                localStorage.setItem(EXPIRY_KEY, newExpiryTime.toString());
                return newExpiryTime;
            }

            return parseInt(expiryTime, 10);
        };

        const expiryTime = getExpiryTime();

        const updateTimer = setInterval(() => {
            const now = new Date().getTime();
            let distance = expiryTime - now;

            if (distance <= 0) {
                clearInterval(updateTimer);
                setIsExpired(true);
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });
        }, 1000);
        
        // Initial call to set state immediately
        const now = new Date().getTime();
        let distance = expiryTime - now;
        if(distance > 0) {
           const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
           const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
           const seconds = Math.floor((distance % (1000 * 60)) / 1000);
           setTimeLeft({
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0')
            });
        } else {
            setIsExpired(true);
        }


        return () => clearInterval(updateTimer);
    }, []);

    return (
        <section id="countdown" className="bg-gray-900/40 py-8 border-t border-b border-red-900/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div id="countdown-heading" className="text-lg font-bold text-red-400 mb-4 uppercase tracking-wider">
                    {isExpired ? 'BONUS OFFER EXPIRED!' : 'LIMITED FIRST EDITION BONUS ENDS IN:'}
                </div>
                <div id="countdown-timer" className="flex justify-center space-x-4 mb-6">
                    <div className="p-3 md:p-5 bg-gray-800 rounded-xl shadow-lg border border-red-700/50">
                        <span id="hours" className="text-4xl md:text-6xl font-extrabold text-yellow-500 block">{timeLeft.hours}</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Hours</span>
                    </div>
                    <div className="p-3 md:p-5 bg-gray-800 rounded-xl shadow-lg border border-red-700/50">
                        <span id="minutes" className="text-4xl md:text-6xl font-extrabold text-yellow-500 block">{timeLeft.minutes}</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Minutes</span>
                    </div>
                    <div className="p-3 md:p-5 bg-gray-800 rounded-xl shadow-lg border border-red-700/50">
                        <span id="seconds" className="text-4xl md:text-6xl font-extrabold text-yellow-500 block">{timeLeft.seconds}</span>
                        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest">Seconds</span>
                    </div>
                </div>

                {!isExpired && (
                    <div id="bonus-details" className="max-w-xl mx-auto bg-red-900/20 p-4 rounded-xl border border-red-700 mt-6">
                        <p className="text-md font-semibold text-white">
                            <span className="text-yellow-400">EXCLUSIVE BONUS:</span> Get the Case Notes Companion PDF (₦3,000 value) FREE if you order the First Edition now!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Countdown;
