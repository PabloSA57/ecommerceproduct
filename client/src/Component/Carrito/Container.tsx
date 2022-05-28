import {useState, useEffect} from 'react';
import { Producto } from '../../Interface/Comercio';


import { CarritoStyle } from './style';
import CartProduct from './Component/CartProduct';
import tomate from '../../public/tomate-png.png';
const obj = [
    {
        id: '1',
        name: 'Tomates',
        img: tomate,
        categoria: 'verduras',
        almacen: 'Las sierras',
        precio: '100',
        descripcion: "Tomate"

    },
    {
        id: '2',
        name: 'Tomates',
        img: tomate,
        categoria: 'verduras',
        almacen: 'Las sierras',
        precio: '100',
        descripcion: "Tomate"

    },
]

const ContainerCarrito = () => {
    const [allproductos, setAllProductos] = useState<Producto[]>([])

    useEffect(() => {
        setAllProductos(obj)
    }, [])
    return(
            <CarritoStyle>
                <div>
                <div>
                    Carrito
                </div>

                <div>
                    {allproductos.map((e) => <CartProduct productos={e}/>)}
                </div>

                <div>
                    total
                    <button>Pagar</button>
                </div>
                </div>
                
            </CarritoStyle>
    )
}

export default ContainerCarrito