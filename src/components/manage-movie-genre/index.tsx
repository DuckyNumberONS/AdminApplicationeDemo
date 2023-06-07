import { getDataMovieGenre } from '@/api/apiConfict';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

interface Props {
    Title: string;
    colorGenre: string;
    idMovieGenre: number;
}
const ManageMovieGenre = () => {
    const path = useRouter();
    const [category, setCategory] = useState<Props[]>([]);

    useEffect(() => {
        const fetch = async () => {
            const res = await getDataMovieGenre();
            setCategory(res);
        };
        fetch();
    }, []);

    const handleDetails = (idCategory: number) => {
        path.push(`/list-category/list-movie-genre/${idCategory}`);
    };

    return (
        <div className="flex flex-col space-y-2">
            <h2 className="font-medium text-2xl">List Movie Genre</h2>
            <div className="shadow overflow-x-auto rounded-md">
                <div className="min-w-full divide-y">
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 gap-4 bg-gray-50 px-6 py-3">
                        <div
                            className="mx-auto cursor-pointer col-span-1 p-2 w-full max-w-sm hover:bg-black hover:text-white text-black transition duration-500 bg-white border border-gray-200 rounded-lg shadow"
                            // onClick={() => handleCreate()}
                        >
                            <div className="mx-auto w-full h-[280px] flex items-center justify-center">
                                <p className="text-[150px] text-cente">+</p>
                            </div>
                        </div>
                        {category.map((items) => (
                            <div
                                className="hover:text-[30px] text-xl mx-auto w-full h-full cursor-pointer col-span-1 p-2 max-w-sm  text-white transition duration-500 bg-white border border-gray-200 rounded-lg"
                                key={items.idMovieGenre}
                                style={{ backgroundColor: items.colorGenre }}
                                onClick={() => handleDetails(items.idMovieGenre)}
                            >
                                <div className="mx-auto w-full h-[280px] flex items-center justify-center">
                                    <p className="text-cente">{items.Title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ManageMovieGenre;
