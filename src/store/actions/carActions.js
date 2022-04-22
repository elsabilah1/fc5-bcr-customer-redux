import { Get } from '../../utils/axios';
import { types } from '../types';

export const getCars = (q) => async (dispatch) => {
    let data = await Get('/cars');

    if (q) {
        if (q.with_driver !== '') {
            data = data.filter((car) => car.with_driver === q.with_driver);
        }
        if (q.capacity !== '') {
            data = data.filter((car) => car.capacity === parseInt(q.capacity));
        }
    }

    data.forEach((car) => {
        car.time = car.time.substring(0, 4);
        car.price = car.price.toLocaleString();
    });

    dispatch({
        type: types.GET_CARS,
        payload: data,
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
