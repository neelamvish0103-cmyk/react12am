import React from 'react'
import HeroSection from '../components/LandingPage/HeroSection.jsx'
import TwoDiv from '../components/LandingPage/TwoDiv.jsx'
import TopCards from '../components/LandingPage/TopCards.jsx'
import Nirvana from '../components/LandingPage/Nirvana.jsx'
import RecentView from '../components/LandingPage/RecentView.jsx'
import TopPicks from '../components/LandingPage/TopPicks.jsx'
import RecentCards from '../components/LandingPage/RecentCards.jsx'
import LifeStyle from '../components/LandingPage/LiveStyle.jsx'
import Blogs from '../components/LandingPage/Blogs.jsx'
import Login from '../components/LandingPage/login.jsx'
import signup from '../components/LandingPage/signup.jsx'

function Home() {
    return (
        <>
            <HeroSection />
            <TwoDiv />
            <TopCards />
            <Nirvana />
            <RecentView />
            <TopPicks />
            <RecentCards/>
            <LifeStyle />
            <Blogs />
        </>
    )
}

export default Home;