
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        // Show the sticky CTA after scrolling past the hero section (approx. window height)
        if (window.scrollY > window.innerHeight * 0.8) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div 
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/80 backdrop-blur-sm border-t border-gray-800/50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            aria-hidden={!isVisible}
        >
            <div className="container mx-auto flex items-center justify-center md:justify-between">
                <div className="hidden md:block">
                    <p className="text-white font-bold text-lg">The Key Was the Lie.</p>
                    <p className="text-gray-400 text-sm">Unlock the truth. First Edition bonus ends soon.</p>
                </div>
                <a href="#pricing" className="cta-button text-white py-3 px-8 rounded-full font-extrabold uppercase tracking-wider text-base w-full md:w-auto text-center flex-shrink-0">
                    Get Your Copy Now
                </a>
            </div>
        </div>
    );
};

export default StickyCTA;
