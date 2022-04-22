import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCars } from '../../store/actions/carActions';
import Loader from '../Loader';
import CardCar from './CardCar';

export default function CarList() {
    const loc = useLocation();
    const dispatch = useDispatch();
    const { cars, isLoading } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCars(loc.state));
    }, [dispatch, loc.state]);

    return (
        <>
            {isLoading && <Loader />}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {cars ? (
                    cars.map((car) => (
                        <LazyLoad key={car.id}>
                            <CardCar item={car} />
                        </LazyLoad>
                    ))
                ) : (
                    <div>Empty List</div>
                )}
            </div>
        </>
    );
}
