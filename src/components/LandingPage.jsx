import React from 'react';
import GradientBar from './common/GradientBar';
import Header from './HeaderComponent';
import Banner from './BannerComponent';
import Idea from './IdeaComponent';
import AboutApp from './AboutAppComponent';
import Tech from './TechComponent';
import Team from './TeamComponent';

const LandingPage = () => {
    return (
        <>
            <GradientBar />
            <Header />
            <div>
                <Banner />
                <Idea />
                <AboutApp />
                <Tech />
                <Team />
            </div>
        </>
    );
};

export default LandingPage;
