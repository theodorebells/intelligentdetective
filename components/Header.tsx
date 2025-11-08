
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="py-4 border-b border-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">
                    THE INTELLIGENT DETECTIVE
                </h1>
            </div>
        </header>
    );
};

export default Header;
