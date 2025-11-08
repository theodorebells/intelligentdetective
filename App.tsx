
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import TeaserStory from './components/TeaserStory';
import Features from './components/Features';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
    return (
        <div className="hero-bg min-h-screen">
            <Header />
            <main>
                <Hero />
                <Countdown />
                <TeaserStory />
                <Features />
                <Author />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
            <StickyCTA />
        </div>
    );
};

export default App;
