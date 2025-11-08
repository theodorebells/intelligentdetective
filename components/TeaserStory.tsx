
import React from 'react';

const TeaserStory: React.FC = () => {
    return (
        <section id="teaser-story" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-red-900/10 p-8 rounded-xl border border-red-800 shadow-2xl">
                    <p className="font-mono text-xs text-red-400 uppercase tracking-widest mb-4">— Excerpt from Case File 77-A —</p>
                    <blockquote className="text-2xl italic font-serif text-gray-200 border-l-4 border-red-500 pl-4">
                        "The blood pooled rapidly, but Ikechi clung to the final, fading light. He gasped his last testament to the man who rushed to his side: 'They didn't break in... they used a key. I heard one say, "Bring that key that the man gave you."... I gave spare keys to only two people... Augustine, my uncle, and Nevy, my fiancée.' With those words, the only witness slipped into eternity, leaving behind a chilling trail of two keys and one killer."
                    </blockquote>
                    <p className="font-mono text-xs text-red-400 uppercase tracking-widest mt-4 text-right">— Witness Testimony | Time of Death: 01:34 AM —</p>
                </div>
            </div>
        </section>
    );
};

export default TeaserStory;
