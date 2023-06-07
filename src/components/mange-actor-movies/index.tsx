import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Loading from '../loading';
import Image from 'next/image';
import { getDataActorMovie } from '@/api/apiConfict';

interface Props {
    idActorMovie: number;
    firstName: string;
    lastName: string;
    story: string;
    imgActorMovie: string;
}

const ManageActorMovies = () => {
    const [data, setData] = useState<Props[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const data = async () => {
            const res = await getDataActorMovie();
            setData(res);
            setIsLoading(false);
        };
        data();
    }, []);

    const router = useRouter();

    const handleCreate = () => {
        router.push(`list-actor-movies/create`);
    };

    const handleDetails = (id: number) => {
        router.push(`list-actor-movies/details/${id}`);
    };
    // const handleDelete = async (id: string) => {
    //     if (confirm('Are you sure you want to delete ?') == true) {
    //         await deleteDataBannar(id);
    //         const result = await getDataBanner();
    //         setData(result);
    //         alert('Delete success');
    //     } else {
    //     }
    // };
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="font-medium text-2xl">List Actor Movies</h2>
            <div className="shadow overflow-x-auto rounded-md">
                <div className="min-w-full divide-y">
                    <div className="grid md:grid-cols-6 lg:grid-cols-6 sm:grid-cols-3 gap-4 bg-gray-50 px-6 py-3">
                        {isLoading ? (
                            <Loading className={'w-[50px] h-[50px] col-span-6'} />
                        ) : (
                            <>
                                <div
                                    className="cursor-pointer col-span-1 p-2 w-full max-w-sm hover:bg-black hover:text-white text-black transition duration-500 bg-white border border-gray-200 rounded-lg shadow"
                                    onClick={() => handleCreate()}
                                >
                                    <div className="mx-auto w-[200px] h-[280px] flex items-center justify-center">
                                        <p className="text-[150px] text-cente">+</p>
                                    </div>
                                </div>
                                {data.map((items) => (
                                    <div
                                        className="cursor-pointer col-span-1 p-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                                        key={items.idActorMovie}
                                        onClick={() => handleDetails(items.idActorMovie)}
                                    >
                                        <img className="mx-auto w-[200px] h-[280px]" src={`${items.imgActorMovie}`} alt={'avatar'} />
                                        <div className="text-center">
                                            <h5 className="text-lg font-semibold tracking-tight text-gray-900 ">{items.firstName + ' ' + items.lastName}</h5>
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
export default ManageActorMovies;
