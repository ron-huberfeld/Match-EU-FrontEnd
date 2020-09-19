import React from 'react';
import GradientBar from '../components/common/GradientBar';
import Header from '../components/HeaderComponent';
import Banner from '../components/BannerComponent';
import Idea from '../components/IdeaComponent';
import AboutApp from '../components/AboutAppComponent';
import Tech from '../components/TechComponent';
import Team from '../components/TeamComponent';

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
