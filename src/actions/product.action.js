import { ProductDetails } from "../containers/ProductDetailsPage";
import axios from "../helpers/axios"
import { productContants } from "./constants"

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        const res = await axios.get(`/products/${slug}`);
        if (res.status === 200) {
            dispatch({
                type: productContants.GET_PRODUCTS_BY_SLUG,
                payload: res.data
            });
        } else {
            // dispatch({
            //     type: 
            // })
        }
    }
}

export const getProductPage = (payload) => {
    return async dispatch => {
        try {
            const { cid, type } = payload.params;
            console.log({ payload });
            const res = await axios.get(`/page/${cid}/${type}`);
            dispatch({type: productContants.GET_PRODUCT_PAGE_REQUEST})
            if (res.status === 200) {
                const { page } = res.data;
                dispatch({
                    type: productContants.GET_PRODUCTS_PAGE_SUCCESS,
                    payload: { page }
                });

            } else {
                const { error } = res.data;
                dispatch({
                    type: productContants.GET_PRODUCTS_PAGE_FAILURE,
                    payload: { error }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductDetailsById = (payload) => {
    return async dispatch => {
        dispatch({ type: productContants.GET_PRODUCTS_DETAILS_BY_ID_REQUEST});
        let res;
        try {
            const { productId } = payload.params;
            res = await axios.get(`/product/${productId}`);
            console.log(res);
            dispatch({
                type: productContants.GET_PRODUCTS_DETAILS_BY_ID_SUCCESS,
                payload: { productDetails: res.data.product }
            });

        } catch(error) {
            console.log(error);
            dispatch({
                type: productContants.GET_PRODUCTS_DETAILS_BY_ID_FAILURE,
                payload: { error: res.data.error }
            });
        }

    }
}

