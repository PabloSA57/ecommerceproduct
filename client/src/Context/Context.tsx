import {createContext} from "react";
import {State} from "../Interface/State";
import {Producto, Comercio} from "../Interface/Comercio";


export type TodoContextProps = {
    todoState: State;
    
    getProductos: (p: Producto[]) => void;
    updateTipo: (tipo: string) => void;
    getComercios: (c: Comercio[]) => void;
    changeWidth: (b: boolean) => void;
    loginAuth: (b: boolean) => void;
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
