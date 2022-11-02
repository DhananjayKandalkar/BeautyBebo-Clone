import * as item from './actionType';

// action creators

export const getNewProdReq = () => {
    return {
        type: item.GET_NEW_ARRIV_PROD_REQUEST
    }
}

export const getNewProdSuc = (data) => {
    return {
        type: item.GET_NEW_ARRIV_PROD_SUCCESS,
        payload: data
    }
}

export const getNewProdFail = () => {
    return {
        type: item.GET_NEW_ARRIV_PROD_FAILURE,
    }
}