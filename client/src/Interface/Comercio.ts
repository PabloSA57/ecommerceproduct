export interface Comercio{
    id:string;
    name: string;
    img: string;
    lugar: string;
}

export interface Producto {
    id: string;
    name: string;
    img: string;
    categoria: string;
    almacen: string;
    precio: string;
    descripcion: string;
}

export interface RegisterUser {
    name: string;
    lastname: string;
    email: string;
    password: string;
    type: string;
}