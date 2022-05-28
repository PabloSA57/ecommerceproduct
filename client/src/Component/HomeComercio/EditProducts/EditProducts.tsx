import React, { useState } from 'react';
import AddProduct from './Component/AddProduct/AddProduct';
import CardProduct from './Component/CardProduct/CardProduct';
import { EditProductStyle } from './style';

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

const EditProducts = () => {
    const [active, setActive]= useState<boolean>(false)


    return (
            <EditProductStyle>
                <div className='con-edit'>
                    <div className='con1'>
                        <div><input type="text" name="" id="" /></div>
                        <div><button onClick={() => setActive(true)}>Add</button></div>
                    </div>

                    <div className='con2'>
                        <div>
                            Productos
                        </div>

                        <div>
                            Categorias
                        </div>
                    </div>

                    <div className='con3'>
                        <div className='con31'>
                            {productos.map(e =>  <CardProduct producto={e}/>)}
                        </div>
                    </div>
                </div>

                {active ? <AddProduct activeC={setActive}/> : null}

            </EditProductStyle>
    )
}

export default EditProducts;