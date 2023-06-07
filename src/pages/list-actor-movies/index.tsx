import ManageActorMovies from '@/components/mange-actor-movies';
import Layout from '@/layout';
import React from 'react';

const Banner = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <ManageActorMovies />
            </div>
        </Layout>
    );
};
export default Banner;
