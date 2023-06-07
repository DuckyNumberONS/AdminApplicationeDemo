import { deleteDataMovies, getDataMovies } from '@/api/apiConfict';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../loading';
import Image from 'next/image';
interface Props {
    idMovie: number;
    idCategory: number;
    title: string;
    description: string;
    bestMovies: boolean;
    imgThumbnail: string;
    imgBackground: string;
    movie: string;
    trailer: string;
}
const ManageMovies = () => {
    // localStorage.setItem('active', 'true');
    const [data, setData] = useState<Props[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataMovies, setDataMovies] = useState([]);
    const [dataTvShow, setDataTvShow] = useState([]);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataMovies();
            setData(result);
            // Movies
            const dataMovies = result.filter((items: any) => items.catory == 'movies');
            setDataMovies(dataMovies);
            // TV-Show
            const dataTvShow = result.filter((items: any) => items.catory == 'tv-show');
            setDataTvShow(dataTvShow);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const handleCreate = () => {
        router.push(`list-movies/create`);
    };

    const handleEdit = (id: number) => {
        router.push(`list-movies/edit/${id}`);
    };

    const handleDetails = (id: number) => {
        router.push(`list-movies/details/${id}`);
    };

    const handleDelete = async (id: number) => {
        if (confirm('Are you sure you want to delete ?') == true) {
            await deleteDataMovies(id);
            const result = await getDataMovies();
            setData(result);
            alert('Delete success');
        } else {
        }
    };

    return (
        <div className="flex flex-col space-y-2">
            <h2 className="font-medium text-2xl">List Movies</h2>
            <div className="shadow overflow-x-auto rounded-md">
                <div className="min-w-full divide-y">
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-4 bg-gray-50 px-6 py-3">
                        {isLoading ? (
                            <Loading className={'w-[50px] h-[50px] col-span-6'} />
                        ) : (
                            <>
                                <div
                                    className="p-3 mx-auto max-w-sm hover:bg-black bg-white border border-gray-200 rounded-lg shadow  cursor-pointer hover:text-white text-black transition duration-500"
                                    onClick={() => handleCreate()}
                                >
                                    <div className="relative">
                                        <div className="lg:w-[250px] lg:h-[350px] flex items-center justify-center">
                                            <p className="text-[150px] text-cente">+</p>
                                        </div>
                                    </div>
                                </div>
                                {data.map((items) => (
                                    <div
                                        className="p-3 mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow  cursor-pointer"
                                        key={items.idMovie}
                                        onClick={() => handleDetails(items.idMovie)}
                                    >
                                        <div className="relative">
                                            <img src={`${items.imgThumbnail}`} alt={'avatar'} className="lg:w-[250px] lg:h-[350px] mb-2" />
                                            <h5 className="text-xl text-center font-bold tracking-tight text-black ">
                                                {items.title.length > 30 ? items.title.substring(0, 20) + '...' : items.title}
                                            </h5>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ManageMovies;
