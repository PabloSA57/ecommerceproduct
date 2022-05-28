import {useReducer} from 'react';

import {TodoContext} from './Context';
import {todoReducer} from './todoReducer';
import {State} from '../Interface/State';
import {Producto, Comercio} from '../Interface/Comercio';

const INITIAL_STATE: State = {
    jwtToken: window.localStorage.getItem('token') || null,
    productos:[],
    allproductos: [],
    comercios: [],
    widthPhone: false,
    login: true,
}

interface props{ 
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children} : props) => {

    const [todoState,dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const getProductos = (p: Producto[]) => {
        dispatch({type: "getProductos", payload:p})
    }

    const updateTipo = (tipo: string) => {
        dispatch({type: "filterTipo", payload: tipo})
    }

    const getComercios = (c: Comercio[]) => {
        dispatch({type: "getComercios", payload: c})
    }

    const changeWidth = (b: boolean) => {
        dispatch({type: "changePhone", payload: b})
    }

    const loginAuth = (b: boolean) => {
        dispatch({type: "loginAuth", payload: b})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            getProductos,
            updateTipo,
            getComercios,
            changeWidth,
            loginAuth
        }}>
            {children}
        </TodoContext.Provider>
    
)}