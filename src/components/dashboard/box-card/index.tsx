import React, { useState } from 'react';

type TotalDetail = {
    title: string;
    totalDetail: number;
};

interface Props {
    titleTotal: string;
    total: number;
    isLoading: boolean;
    totalDetails?: TotalDetail[];
}

const BoxCard: React.FC<Props> = ({ titleTotal, total, isLoading, totalDetails }) => {
    totalDetails = totalDetails;
    console.log({ totalDetails });

    const [viewAll, setViewAll] = useState(false);
    return (
        <div className="rounded-md shadow bg-white flex flex-col">
            <div className="flex space-x-4 items-center px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-10 h-10 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
                <div className="flex flex-col space-y-1">
                    <h3 className="font-lg text-gray-500">{titleTotal}</h3>
                    {isLoading ? <p>Loading ...</p> : <span className="font-semibold text-2xl text-gray-600">{total}</span>}
                </div>
            </div>
            {viewAll ? (
                <div>
                    {totalDetails?.map((items) => (
                        <div className="px-4 py-3 flex justify-between" key={items.title}>
                            <h3 className="font-lg text-gray-500">{items.title}</h3>
                            {isLoading ? <p>Loading ...</p> : <span className="font-semibold text-2xl text-gray-600">{items.totalDetail}</span>}
                        </div>
                    ))}
                    <div className="bg-gray-50 px-4 py-3 rounded-b-md">
                        <button className="text-sm text-indigo-500 hover:text-indigo-700" onClick={() => setViewAll(false)}>
                            View less
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-gray-50 px-4 py-3 rounded-b-md">
                    <button className="text-sm text-indigo-500 hover:text-indigo-700" onClick={() => setViewAll(true)}>
                        View all
                    </button>
                </div>
            )}
        </div>
    );
};
export default BoxCard;
