
import React from 'react';

const Author: React.FC = () => {
    return (
        <section id="author" className="py-16 md:py-24 bg-gray-900/40 border-t border-b border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">About the Author</h3>
                <p className="text-lg text-gray-400 mb-12">MOSES C. JAJA</p>

                <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start text-left bg-gray-800/50 p-8 rounded-2xl shadow-2xl border border-gray-700">
                    <img src="https://placehold.co/150x150/171717/999999?text=M.C.J." alt="Moses C. Jaja Profile Photo" className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-yellow-500 shadow-xl flex-shrink-0" />
                    <div>
                        <h4 className="text-2xl font-bold text-red-400 mb-3">Moses C. Jaja</h4>
                        <p className="text-gray-300">
                            Moses C. Jaja is a masterful storyteller dedicated to the art of suspense and psychological intrigue. With a keen eye for detail and a knack for creating high-stakes, twist-filled narratives, Jaja crafts stories that pull readers into the investigation alongside the detective. "The Intelligent Detective Part 1" is the launch of a signature collection designed to challenge your deductive skills from the very first page.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;
