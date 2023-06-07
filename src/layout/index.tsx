import { useCallback, useState } from 'react';
import Footer from './footer';
import Header from './header';
import Navbar from './navbar';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [mouses, setMouses] = useState(false);
    const mouse = useCallback(
        (newData: boolean) => {
            setMouses(newData);
        },
        [setMouses],
    );
    const unMouse = () => {
        setMouses(false);
    };
    return (
        <>
            <div className="grid md:grid-cols-10 bg-grey-deeplilac">
                <div className="col-span-1 md:col-span-1 lg:col-span-2" onClick={unMouse}>
                    <Navbar />
                </div>
                <div className="col-span-5 md:col-span-9 lg:col-span-8 h-full">
                    <div className="relative">
                        <Header mouse={mouses} mouseClick={mouse} />
                        <div className="overflow-y-auto h-screen flex flex-col" onClick={unMouse}>
                            {children}
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
