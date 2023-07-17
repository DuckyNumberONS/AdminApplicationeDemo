import DeatailsMovies from '@/components/manage-movies/details';
import Layout from '@/layout';
import React, { useEffect } from 'react';

const DetailsMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3001/list-category/list-movie-genre';
    const path = url.substring(baseUrl.length);

    return (
        <Layout>
            <DeatailsMovies path={path} />
        </Layout>
    );
};
export default DetailsMovies;
