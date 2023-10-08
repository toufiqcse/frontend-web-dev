// @ts-nocheck
import React from 'react';
import About from '../../../about/About';
import Contact from '../../../Contact/Contact';
import Skill from '../../../Skill/Skill';
import HomePage from '../HomePage';
import Education from '../../../../components/Educations/Education';
import Services from '../../../../components/Services/Services';
import Experience from '../../../../components/Expericence/Expericence';
import WhyMe from '../../../../components/Whyme/WhyMe';
import Projects from '../../../Projects/Projects';
import FilteredList from '../../../../components/FilteredList/FilteredList';
import TopScroll from '../../../../components/TopScroll/TopScroll';

const Home = () => {
    return (
        <>
            <HomePage />
            <About />
            <Services />
            <Skill />
            <Education />
            <FilteredList />
            <Contact />
            <TopScroll />
        </>
    );
};

export default Home;