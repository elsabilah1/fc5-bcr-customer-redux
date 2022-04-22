import { types } from '../types';

const initialState = {
    cars: [],
    car: {},
    listOption: {
        car_type: [],
        with_driver: [],
    },
    isLoading: true,
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CARS:
            return {
                ...state,
                cars: action.payload.data,
                listOption: {
                    car_type: action.payload.car_type,
                    with_driver: action.payload.with_driver,
                },
                isLoading: false,
            };
        case types.GET_CAR:
            return {
                ...state,
                car: action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default carReducer;
