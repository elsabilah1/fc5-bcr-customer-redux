import { Get } from '../../utils/axios';
import { types } from '../types';

export const getCars = (q) => async (dispatch) => {
    let data = await Get('/cars');

    data.forEach((car) => {
        car.time = car.time.substring(0, 4);
        car.price = car.price.toLocaleString();
    });

    // setup list option
    let car_type = data.map((car) => car.type);
    car_type = [...new Set(car_type)].sort();

    const list_car_type = car_type.map((type) => ({
        name: 'type',
        placeholder: type,
        value: type,
    }));

    const list_with_driver = [
        { name: 'with_driver', placeholder: 'Dengan Supir', value: true },
        { name: 'with_driver', placeholder: 'Tanpa Supir', value: false },
    ];

    // setup filtering data
    if (q) {
        if (q.with_driver !== '') {
            data = data.filter((car) => car.with_driver === q.with_driver);
        }
        if (q.type !== '') {
            data = data.filter((car) => car.type === q.type);
        }
        if (q.capacity !== '') {
            data = data.filter((car) => car.capacity === parseInt(q.capacity));
        }
    }

    const res = {
        data,
        car_type: list_car_type,
        with_driver: list_with_driver,
    };

    dispatch({
        type: types.GET_CARS,
        payload: res,
    });
};

export const getCarById = (id) => async (dispatch) => {
    let data = await Get(`/cars/${id}`);

    data.time = data.time.substring(0, 4);
    data.price = data.price.toLocaleString();

    dispatch({
        type: types.GET_CAR,
        payload: data,
    });
};
