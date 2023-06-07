import React from 'react';
import Layout from '@/layout';
import ManageMovieGenre from '@/components/manage-movie-genre';
const ListCatefory = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <ManageMovieGenre />
            </div>
        </Layout>
    );
};
export default ListCatefory;
