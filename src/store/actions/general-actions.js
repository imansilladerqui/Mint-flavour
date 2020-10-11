import * as actionTypes from "./types";
import {axiosInstance} from "../../utils/axios";

// CONSULTAR A LA API LA INFO DEL USUARIO LOGGEADO

export const getUser = () => async (dispatch) => {
    dispatch({ 
        type: actionTypes.GET_USER,
    });
};

// CONSULTAR A LA API EL ESTADO DEL USUARIO A CHATEAR

export const getStatusUser = () => async (dispatch) => {
    dispatch({ 
        type: actionTypes.GET_STATUS_USER,
    });
};

// CONSULTAR A LA API EL LISTADO DE MENSAJES

export const getMessages = () => async (dispatch) => {
    dispatch({ 
        type: actionTypes.GET_MESSAGES,
    });
};

export const deleteMessage = (id) => async (dispatch) => {
    dispatch({ 
        type: actionTypes.DELETE_MESSAGE,
        payload: id
    });
};

export const setNewMessage = (message) => async (dispatch) => {
    dispatch({ 
        type: actionTypes.SET_NEW_MESSAGE,
        payload: message
    });
};