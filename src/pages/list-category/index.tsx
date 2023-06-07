import React from 'react';
import Layout from '@/layout';
import ManageCategory from '@/components/manage-category';
const ListCatefory = () => {
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px]">
                <ManageCategory />
            </div>
        </Layout>
    );
};
export default ListCatefory;
