import { State } from '../Interface/State';
import { Producto, Comercio } from '../Interface/Comercio';

type TodoAction = 
    |{type: 'getProductos', payload: Producto[]}
    |{type: 'filterTipo', payload: string}
    |{type: 'getComercios', payload: Comercio[]}
    |{type: 'changePhone', payload: boolean}
    |{type: 'loginAuth', payload: boolean}

export const todoReducer = (state: State, action: TodoAction): State => {

    switch (action.type){
        case "getProductos":
            return {
                ...state,
                allproductos: action.payload,
                productos: action.payload
            }
        case "filterTipo":
            const allproductos = state.allproductos;
            const tipo = action.payload;
            const filterTipo = tipo === "All"  ? allproductos : allproductos.filter(e => e.categoria === tipo);
            return{
                ...state,
                productos: filterTipo
                }
        case "getComercios":
            return {
                ...state,
                comercios: action.payload
            }
        case "changePhone":
            return {
                ...state,
                widthPhone: action.payload
            }
        case "loginAuth":
            return {
                ...state,
                login: action.payload
            }
    }
}