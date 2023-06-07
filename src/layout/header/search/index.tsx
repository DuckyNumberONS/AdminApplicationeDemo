import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getDataBannerToTitle, getDataMoviesId } from '@/api/apiConfict';

interface PropDatas {
    id: string;
    title: string;
    description: string;
    catory: string;
    bestMovies: boolean;
    imgThumbnail: string;
    imgBackground: string;
}
interface Props {
    mouse: boolean;
    mouseClick: (newData: boolean) => void;
}

const SearchHeader: React.FC<Props> = ({ mouse, mouseClick }) => {
    const [keySearch, setKeySearch] = useState('');
    const [dataSearch, setDataSearch] = useState<PropDatas[]>([]);
    const router = useRouter();
    // const currentUrl = router.asPath;
    // useEffect(() => {
    //     switch (currentUrl) {
    //         // case '/':
    //         //     console.log('Home');
    //         //     break;
    //         case '/list-movies':
    //             if (keySearch !== '') {
    //                 const fetchdataSearch = async () => {
    //                     const res = await getDataMoviesId(keySearch);
    //                     console.log(res);

    //                     setDataSearch(res);
    //                 };
    //                 fetchdataSearch();
    //             }

    //             break;
    //         case '/banner-slider':
    //             if (keySearch !== '') {
    //                 const fetchdataSearch = async () => {
    //                     const res = await getDataBannerToTitle(keySearch);
    //                     setDataSearch(res);
    //                 };
    //                 fetchdataSearch();
    //             }
    //             break;
    //         default:
    //     }
    // }, [currentUrl, keySearch]);
    useEffect(() => {
        const fetchdataSearch = async () => {
            const res = await getDataBannerToTitle(keySearch);
            setDataSearch(res);
        };
        fetchdataSearch();
    }, [keySearch]);
    const handeleSearch = (key: string) => {
        setKeySearch(key);
    };

    return (
        <div className="hidden md:inline-flex flex-1 ">
            <div className=" h-full relative lg:w-1/3">
                <input
                    type="text"
                    className="py-2 px-4 w-full border border-gray-300  rounded-md font-light focus:ring-0 focus:border-indigo-500"
                    placeholder="Search..."
                    onChange={(e: any) => handeleSearch(e.target.value)}
                    onClick={() => mouseClick(true)}
                />
                {/* {mouse && (
                    <div
                        className={`absolute border bg-white w-full mt-2 overflow-auto h-[300px] transition-all duration-300 ease-in-out ${
                            dataSearch.length >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                    >
                        <ul className="m-2">
                            {dataSearch.map((items) => (
                                <li key={items.id} className="cursor-pointer flex my-2" onClick={() => router.push(`/banner-slider/details/${items.id}`)}>
                                    <img src={items.imgThumbnail} alt="imgSearch" width={100} height={50} className="mr-2" />
                                    <div>
                                        <h2 className="font-bold">{items.title}</h2>
                                        <p>{items.description.length >= 100 ? items.description.substring(0, 90) + '...' : items.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )} */}
            </div>
        </div>
    );
};
export default SearchHeader;
