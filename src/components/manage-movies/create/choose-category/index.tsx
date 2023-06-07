import { getDataCategorys, getDataListCategorysId, getDataMovieGenre, postDataListCategory } from '@/api/apiConfict';
import Loading from '@/components/loading';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

interface Props {
    path: number;
}

interface PropCategory {
    idCategory: number;
    colorCategory: string;
    title: string;
}

interface PropMovieGenre {
    idMovieGenre: number;
    colorGenre: string;
    Title: string;
}
interface PropListCategory {
    idMovieGenre: number;
    colorGenre: string;
    Title: string;
    idCategory: number;
    colorCategory: string;
    title: string;
}
const ChooseCategory: React.FC<Props> = ({ path }) => {
    const router = useRouter();
    const pathname = router.pathname;
    const linkDetails = '/list-movies/details/[id]';

    const [isLoading, setIsLoading] = useState(true);
    // const [lock, setLock] = useState(false);
    // Edit change
    const [defaultCategory, setDefaultCategory] = useState(0);
    const [defaultMovieGenre, setDefaultMovieGenre] = useState([]);

    useEffect(() => {
        if (pathname === linkDetails) {
            setSelectedItemCategory(defaultCategory);
        }
    }, [defaultCategory, pathname]);

    useEffect(() => {
        if (pathname === linkDetails) {
            setSelectedItemMovieGenre(defaultMovieGenre);
        }
    }, [defaultMovieGenre, pathname]);

    const [category, setCategory] = useState<PropCategory[]>([]);
    const [movieGenre, setMovieGenre] = useState<PropMovieGenre[]>([]);
    const [selectedItemCategory, setSelectedItemCategory] = useState<number | null>(pathname == linkDetails ? defaultCategory : null);
    console.log({ selectedItemCategory });

    const [selectedItemMovieGenre, setSelectedItemMovieGenre] = useState<number[]>(pathname == linkDetails ? defaultMovieGenre : []);

    useEffect(() => {
        const fetch = async () => {
            const res = await getDataCategorys();
            setCategory(res);
        };
        fetch();
    }, []);

    useEffect(() => {
        const fetch = async () => {
            const res = await getDataMovieGenre();
            setMovieGenre(res);
        };
        fetch();
    }, []);

    useEffect(() => {
        if (pathname == linkDetails) {
            const fetchData = async () => {
                const result = await getDataListCategorysId(path);
                setDefaultCategory(result[0].idCategory);
                setDefaultMovieGenre(result.map((items: PropListCategory) => items.idMovieGenre));
                setIsLoading(false);
            };
            fetchData();
        }
    }, [path, pathname]);

    const handleChooseCategory = useCallback((itemId: number) => {
        setSelectedItemCategory(itemId);
    }, []);

    const handleChooseMovieGenre = useCallback((itemId: number) => {
        // chức năng giới hạn 4 thể loại phim
        // if (selectedItemMovieGenre.length == 3) {
        //     setLock(true);
        //     alert('Only 4 movie genres can be selected');
        // } else {
        //     setLock(false);category
        //         if (index > -1) {
        //             return prevArr.filter((item) => item !== itemId);
        //         } else {
        //             return [...prevArr, itemId];
        //         }
        //     });
        // }
        setSelectedItemMovieGenre((prevArr) => {
            const index = prevArr.indexOf(itemId);
            if (index > -1) {
                return prevArr.filter((item) => item !== itemId);
            } else {
                return [...prevArr, itemId];
            }
        });
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const idMovie = path;
        const idCategory = selectedItemCategory;
        if (selectedItemMovieGenre.length > 0 && idMovie) {
            const actorMovieGenreData = selectedItemMovieGenre.map((idMovieGenre) => ({
                idMovie,
                idMovieGenre,
                idCategory,
            }));
            postDataListCategory(actorMovieGenreData);
            router.push(`/list-movies/details/${idMovie}`);
        } else {
            alert('Please fill in all the required fields');
        }
    };
    return (
        <div className="flex-shrink-0 mt-[72px]">
            <form
                className={`rounded-md border border-gray-300 p-5 shadow bg-white mx-auto my-4 lg:w-10/12 ${pathname === linkDetails && 'overflow-scroll h-[600px]'}`}
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <h3 className="mb-5 text-lg font-medium text-gray-900 ">Choose Category:</h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        {category.map((items) => (
                            <li key={items.idCategory}>
                                <input type="radio" id={`${items.title}`} className="hidden peer" onChange={() => handleChooseCategory(items.idCategory)} name="category" />
                                <label
                                    htmlFor={`${items.title}`}
                                    className={`${
                                        items.idCategory == selectedItemCategory && 'border-blue-600 '
                                    } inline-flex items-center justify-between w-full p-5  bg-white border-2 rounded-lg cursor-pointer hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50 `}
                                >
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold" style={{ color: items.colorCategory }}>
                                            {items.title}
                                        </div>
                                        <p className="w-full text-sm text-black">A JavaScript library for building user interfaces.</p>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedItemCategory && (
                    <div className="transition delay-150 duration-700 ease-in-out">
                        <h3 className="mb-5 text-lg font-medium text-gray-900 ">Choose MovieGenre:</h3>
                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            {movieGenre.map((items) => (
                                <li key={items.idMovieGenre}>
                                    <input type="checkbox" id={`${items.Title}`} className="hidden peer" onChange={() => handleChooseMovieGenre(items.idMovieGenre)} />
                                    <label
                                        htmlFor={`${items.Title}`}
                                        className={`${
                                            selectedItemMovieGenre.includes(items.idMovieGenre) && 'border-blue-600'
                                        } inline-flex items-center justify-between w-full p-5  bg-white border-2  rounded-lg cursor-pointer peer-checked:text-gray-600 hover:bg-gray-5 
                                        `}
                                    >
                                        <div className="block">
                                            <div className="w-full text-sm font-semibold" style={{ color: items.colorGenre }}>
                                                {items.Title.length > 30 ? items.Title.substring(0, 30) + '...' : items.Title}
                                            </div>
                                            {/* thêm phần giới thiệu về thể loại phim */}
                                            <p className="w-full text-sm text-black">A JavaScript library for building user interfaces.</p>
                                        </div>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mt-10">
                    <input type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md w-full" value={pathname === linkDetails ? 'Edit' : 'Create'} />
                </div>
            </form>
        </div>
    );
};
export default ChooseCategory;
