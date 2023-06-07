import React, { useEffect, useState } from 'react';
import { getDataActorMovie, getDataMovies } from '@/api/apiConfict';
import BoxCard from './box-card';

const Dashboard = () => {
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [totalActorMovie, setTotalActorMovie] = useState(0);
    const [totalMovies, setTotalMovies] = useState(0);
    const [totaTvShow, setTotalTvShow] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getDataMovies();
            const countAll = res.length;
            const dataMovies = res.filter((items: any) => items.idCategory == 2);
            const countMovies = dataMovies.length;
            setTotalMovies(countMovies);
            const dataTVShow = res.filter((items: any) => items.idCategory == 1);
            const counTVShow = dataTVShow.length;
            setTotalTvShow(counTVShow);
            setIsLoading(false);
            setTotal(countAll);
        };
        fetchData();
    }, []);
    useEffect(() => {
        const data = async () => {
            const res = await getDataActorMovie();
            setTotalActorMovie(res.length);
            setIsLoading(false);
        };
        data();
    }, []);
    const totalDetails = [
        {
            title: 'Total Movies',
            totalDetail: totalMovies,
        },
        {
            title: 'Total TvShow',
            totalDetail: totaTvShow,
        },
    ];
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <BoxCard isLoading={isLoading} titleTotal={'Total Movies'} total={total} totalDetails={totalDetails} />
            <BoxCard isLoading={isLoading} titleTotal={'Total Actor Movies'} total={totalActorMovie} />
        </div>
    );
};
export default Dashboard;
