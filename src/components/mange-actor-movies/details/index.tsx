import { getActorMovieById } from '@/api/apiConfict';
import Loading from '@/components/loading';
import Layout from '@/layout';
import React, { useEffect, useState } from 'react';

interface Props {
    path: string;
}

interface PropDatas {
    idActorMovie: number;
    firstName: string;
    lastName: string;
    story: string;
    imgActorMovie: string;
}

const DeatailsBanner: React.FC<Props> = ({ path }) => {
    const [data, setData] = useState<PropDatas>({
        idActorMovie: 0,
        firstName: '',
        lastName: '',
        imgActorMovie: '',
        story: '',
    });
    console.log({ data });

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getActorMovieById(path);
            setData(result);
            setIsLoading(false);
        };
        fetchData();
    }, [path]);
    return (
        <Layout>
            <div className="flex-shrink-0 p-5 mt-[72px] mx-auto">
                {isLoading ? (
                    <Loading className={'w-[70px] h-[70px]'} />
                ) : (
                    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${data.imgActorMovie}`} alt="avatar" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{data.firstName + ' ' + data.lastName}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.story}</p>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};
export default DeatailsBanner;
