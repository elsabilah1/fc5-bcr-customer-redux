import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getCarById } from '../../store/actions/carActions';
import Filter from '../Filter';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Sidebar from './Sidebar';

export default function Layout() {
    const loc = useLocation();
    const { id } = useParams();
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(false);
    const [filterFocus, setFilterFocus] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(getCarById(id));
        }
    });

    return (
        <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
            {menu && <Sidebar setMenu={setMenu} />}
            <div
                className={classNames(
                    filterFocus && 'absolute z-10 h-full w-full bg-black/60',
                    menu && 'absolute z-30 h-full w-full bg-black/60'
                )}
            ></div>
            <div className="lg:relative">
                <div className="bg-blue-50">
                    <Header setMenu={setMenu} />
                    {loc.pathname === '/' ? <Hero /> : <div className="h-14 md:h-28" />}
                </div>
                <Filter setFilterFocus={setFilterFocus} />
            </div>
            <div className="mx-auto mt-4 flex-1 px-4 lg:mt-20 lg:max-w-5xl lg:px-0">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
