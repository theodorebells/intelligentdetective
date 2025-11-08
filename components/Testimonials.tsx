
import React from 'react';

const TestimonialCard: React.FC<{ borderColor: string; author: string; authorColor: string; children: React.ReactNode; }> = ({ borderColor, author, authorColor, children }) => (
    <div className={`bg-gray-800 p-6 rounded-xl shadow-2xl border-l-4 ${borderColor}`}>
        <p className="italic text-gray-200 mb-4">{children}</p>
        <p className={`font-bold ${authorColor}`}>{author}</p>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">What Readers are Saying</h3>
                <p className="text-lg text-gray-400 mb-12">The verdict is in.</p>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <TestimonialCard borderColor="border-red-500" author="— Michael B., Book Reviewer" authorColor="text-red-400">
                        "The setup is brilliant. I was hooked by Ikechi's last words—the suspense around the two keys is masterful. A true page-turner."
                    </TestimonialCard>
                    <TestimonialCard borderColor="border-yellow-500" author="— Elena C., Book Reviewer" authorColor="text-yellow-400">
                        "It's classic detective fiction with a modern twist of psychological tension. The short story format keeps the pace fast and the collection addictive."
                    </TestimonialCard>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
