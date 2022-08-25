import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        //log in the user //
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data })

        navigate('/')
        window.location.reload()
    } catch (error) {
        console.log(error)
        
    }
}
export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //log up the user //
        const { data } = await api.signUp(formData)

        dispatch({ type: AUTH, data })

        navigate('/')
        window.location.reload()
    } catch (error) {
        console.log(error)
        
    }
}