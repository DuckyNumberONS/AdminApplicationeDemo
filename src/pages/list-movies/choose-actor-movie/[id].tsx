import ChooseActor from '@/components/manage-movies/create/choose-actor-movie';
import Layout from '@/layout';
import React, { useEffect } from 'react';

const ChooosActorMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3000/list-movies/choose-actor-movie/';
    const pathUrl = url.substring(baseUrl.length);
    const path = parseInt(pathUrl, 10);
    return (
        <Layout>
            <ChooseActor path={path} />
        </Layout>
    );
};
export default ChooosActorMovies;
