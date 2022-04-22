import { types } from '../types';

const initialState = {
    cars: [],
    car: {},
    isLoading: true,
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CARS:
            return {
                ...state,
                cars: action.payload,
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
