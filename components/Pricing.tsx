
import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-16 md:py-24 bg-gray-900/60 border-t border-red-900/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4">Join the Investigation</h3>
                <p className="text-xl text-gray-400 mb-10">Don't miss the First Edition. The clock is ticking.</p>

                <div className="max-w-lg mx-auto bg-gray-800 rounded-2xl p-8 shadow-[0_0_80px_rgba(139,0,0,0.3)] border border-red-700/50">
                    <p className="text-2xl text-gray-500 line-through mb-2">List Price: ₦5,000</p>
                    <p className="text-5xl font-black text-white mb-6">First Edition Price: <span className="text-yellow-400">₦1,000</span></p>

                    <div className="text-center mb-8">
                        <p className="text-lg font-semibold text-red-300">🚨 Exclusive Bonus Included! (Time-Sensitive Offer)</p>
                        <p className="text-sm text-gray-400 mt-1">FREE Case Notes Companion PDF (₦3,000 value)</p>
                    </div>

                    <a href="#" className="cta-button text-white py-4 px-12 rounded-full font-extrabold uppercase tracking-wider text-lg w-full block">
                        Download My Copy & Case Notes!
                    </a>
                </div>

                <p className="mt-8 text-md text-gray-500">
                    Read on any device. 100% satisfaction guaranteed.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
