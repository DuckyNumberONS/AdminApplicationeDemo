import ChooseCategory from '@/components/manage-movies/create/choose-category';
import Layout from '@/layout';
import React, { useEffect } from 'react';

const ChooseCategoryMovies = () => {
    const url = typeof window !== 'undefined' ? window.location.toString() : '';
    const baseUrl = 'http://localhost:3001/list-movies/choose-category/';
    const pathUrl = url.substring(baseUrl.length);
    const path = parseInt(pathUrl, 10);
    console.log(path);

    return (
        <Layout>
            <ChooseCategory path={path} />
        </Layout>
    );
};
export default ChooseCategoryMovies;
