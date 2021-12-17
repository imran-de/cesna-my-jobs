import React from 'react';
import Banner from '../Shared/Banner/Banner';
import BannerInfo from './BannerInfo/BannerInfo';
import LatestJobs from './LatestJobs/LatestJobs';
const Home = () => {
    return (
        <main>
            <Banner />
            <BannerInfo />
            <LatestJobs />
        </main>
    );
};

export default Home;