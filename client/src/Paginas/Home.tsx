import { useContext, useEffect, useState } from 'react';

import {TodoContext} from '../Context/Context';

import Comercios from "../Component/Home/Comercios/Comercios";
import Header from "../Component/Home/Header/Header";
import Presentacion from "../Component/Home/Presentacion/Presentacion";
import Productos from "../Component/Home/Productos/Productos";
import  Footer from '../Component/Footer/Footer';
import InputS from '../Component/Home/InputSearch/InputS';

import axios from 'axios';
import HeaderC from '../Component/Home/HeaderClient/HeaderC';


export default function Home() {
    const [width, setWidth] = useState<number>(
        window.innerWidth
    );

    const {todoState, getProductos, getComercios, changeWidth} = useContext(TodoContext);
    const {widthPhone, login} = todoState;

    console.log(login)
    console.log(todoState)
    
    useEffect(() => {
        const getProductosApi = async () => {
            const res = await axios.get('http://localhost:3004/productos')
                getProductos(res.data)
        } 

        getProductosApi()
    }, [])

    useEffect(() => {
        const getComerciosApi = async () => {
            const res = await axios.get('http://localhost:3004/comercios')
                getComercios(res.data)
        } 

        getComerciosApi()
    }, [])

    

    useEffect(() => {
        function resizeListener() {
        setWidth(window.innerWidth)
    }
        window.addEventListener("resize", resizeListener);
    }, [window.innerWidth])

    useEffect(() => {
        if(width < 700 ){
            changeWidth(true)
        }else{
            changeWidth(false)
        }
    }, [width])
    
    return (
        <div>
            {login ? <HeaderC />
            :<Header />}

            <Presentacion />
            {widthPhone ? <InputS/> : <div></div>}
            <Comercios />
            <Productos />
            <Footer />
        </div>
    )
}
