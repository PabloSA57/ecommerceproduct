import { ProductosStyle } from './style';
import { ContainProductStyle, DivRow } from '../../../style/productos';
import p from './productos.module.css';
import {  useContext, useState } from 'react';
import { CardProductos } from './CardProductos/CardProductos';
import NoProduct from './Component/NoProduct';
import { Text } from '../../../style/text';

import {TodoContext} from "../../../Context/Context";

let productos = [{
    id: "1",
    name: "Tomate",
    img: "https://static4.depositphotos.com/1017505/320/i/600/depositphotos_3201839-stock-photo-three-tomatoes.jpg",
    categoria: "Verduras",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},
{
    id: "2",
    name: "Bananas",
    img: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},
{
    id: "3",
    name: "Pera",
    img: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"
},  
{
    id: "2",
    name: "Bananas",
    img: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"

},
{
    id: "3",
    name: "Pera",
    img: "http://camabana.com/img/header/bananas.jpg",
    categoria: "Frutas",
    almacen: "Las Sierras",
    precio: "100",
    descripcion: "Tomate"

}

]


    const arrTipo = ["All", 'Verduras', 'Frutas', 'Bebidas', 'Golosinas', 'Otros'];
    const Productos = () => {
        const [active, setActive] = useState('All')
        const {todoState, updateTipo} = useContext(TodoContext);
        //const {productos} = todoState;

        

        const handlerTipo = (name: string) => {
            updateTipo(name)
            setActive(name)
        }   

    return (
            <ProductosStyle >
                
                    <DivRow>
                        <div>
                            <Text size='20px' weight='520' lineheight='20px'>  
                                Productos
                            </Text>
                        
                        </div>
                        <div className="filt">
                            {arrTipo.map(e => 
                            <Text 
                            onClick= {() => handlerTipo(e)}
                            color={active === e ? 'orange' : null}
                            size='14px' 
                            weight='400' 
                            lineheight='20px' 
                            cursor='pointer'>
                                {e}
                            </Text>)}

                        </div>
                    </DivRow>
                    
                <ContainProductStyle>
                    {productos.length > 0 ?productos.map(p => <CardProductos producto={p}/>) : <NoProduct />}
                </ContainProductStyle>
            </ProductosStyle>
        
    )
}

export default Productos;
