import * as types from './actionType';

const initialValue = {
    products: [],
    isLoading: false,
    isError: false
}

export const reducer = (state=initialValue, action) => {
    const {type, payload} = action;
    switch(type){
        case types.GET_NEW_ARRIV_PROD_REQUEST:
            return {...state, isLoading: true};
        case types.GET_NEW_ARRIV_PROD_SUCCESS:
            return {...state, isLoading: false, products: payload};
        case types.GET_NEW_ARRIV_PROD_FAILURE:
            return {...state, isLoading: false, products: [], isError: true};
        default:
            return state;
    };
};