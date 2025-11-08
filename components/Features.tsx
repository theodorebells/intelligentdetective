
import React from 'react';

const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode; iconColor: string; }> = ({ icon, title, children, iconColor }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition duration-300 shadow-xl">
        <div className={`text-2xl ${iconColor} mb-3`}>{icon}</div>
        <h4 className="font-bold text-xl mb-2">{title}</h4>
        <p className="text-gray-400">{children}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="what-you-get" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Unravel the Mystery. Piece by Piece.
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard icon="🔪" title="The Final Confession" iconColor="text-red-500">
                        Analyze Ikechi's cryptic dying words, a trove of clues the police missed, and the chilling detail about the entry key.
                    </FeatureCard>
                    <FeatureCard icon="🔒" title="Two Keys, One Truth" iconColor="text-yellow-500">
                        Delve into the lives of Augustine, the uncle, and Nevy, the fiancée. Only two people had spare keys. Which one is the accomplice?
                    </FeatureCard>
                    <FeatureCard icon="📸" title="The Broken Evidence" iconColor="text-red-500">
                        Reconstruct the critical moment the gunmen destroyed the camera and memory card. Was it a mistake or part of a calculated, bigger plan?
                    </FeatureCard>
                    <FeatureCard icon="🧐" title="The Art of Deduction" iconColor="text-yellow-500">
                        Witness the Intelligent Detective at work, connecting seemingly unrelated events to form a complete, shocking picture.
                    </FeatureCard>
                    <FeatureCard icon="📚" title="A Collection of Stories" iconColor="text-red-500">
                        Beyond Part 1, this volume contains other thrilling story series to keep you guessing late into the night.
                    </FeatureCard>
                    <FeatureCard icon="📖" title="Volume One Complete" iconColor="text-yellow-500">
                        A gripping, self-contained start to a new detective universe that sets the foundation for future parts.
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;
