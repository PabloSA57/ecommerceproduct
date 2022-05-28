import {Producto, Comercio } from './Comercio';

export interface State {
    jwtToken: string | null,
    productos: Producto[],
    allproductos: Producto[],
    comercios: Comercio[],
    widthPhone: boolean,
    login: boolean
}