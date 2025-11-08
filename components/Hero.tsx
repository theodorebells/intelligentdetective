
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="py-12 md:py-24 text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-yellow-500 font-semibold mb-3 tracking-widest uppercase text-sm">VOLUME ONE</p>
                <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                    <span className="text-red-600">The Key Was the Lie.</span>
                    <br className="hidden sm:inline" /> The Truth is the Killer.
                </h2>
                <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
                    Ikechi is dying. His last words are a map of betrayal: two spare keys, a broken camera, and two suspects—his uncle and his fiancée. Welcome to the first case in The Intelligent Detective series.
                </p>

                <div className="mb-12">
                    <img src="https://placehold.co/256x400/0a0a0a/f5f5f5?text=THE%0AINTELLIGENT%0ADETECTIVE" alt="The Intelligent Detective Part 1 Book Cover" className="mx-auto w-48 md:w-64 rounded-xl shadow-2xl transition duration-500 hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transform hover:scale-[1.02] border-2 border-yellow-500/50" />
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a href="#pricing" className="cta-button text-white py-4 px-12 rounded-full font-extrabold uppercase tracking-wider text-lg">
                        Start the Investigation Now
                    </a>
                </div>
                <p className="mt-4 text-sm text-gray-500 font-medium">Instant Download | First Edition Collection</p>
            </div>
        </section>
    );
};

export default Hero;
