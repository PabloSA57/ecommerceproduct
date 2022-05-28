import React, {useState} from 'react'

import { AddProductStyle } from './style';
import {Producto} from '../../../../../Interface/Comercio'

interface Prop{
    activeC: React.Dispatch<React.SetStateAction<boolean>>
}
const AddProduct = ({activeC}: Prop) => {
    const [c , setc] = useState(false)
    const [input, setInput] = useState<Producto>({
        id:'',
        name:'',
        img:'',
        categoria: '',
        almacen: '',
        precio: '',
        descripcion: '',
    })

    function hadlerInput(e: React.ChangeEvent<HTMLInputElement>){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log("submit")
        
        
    }

    return (
            <AddProductStyle>
                <div className='-con'>
                    

                    <div className='con-edit'>
                        <div className='con-form'>
                            <div className='con-form1'>
                                <div>
                                    Añadir producto
                                </div>
                                <button onClick={() => activeC(false)}>X</button>
                            </div>

                            <div className='con-form2'>
                                <div className='con-form22'>
                                    <div >    
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        name="name" 
                                        value={input.name} 
                                        onChange={hadlerInput} 
                                        placeholder="Name"/>
                                    </div>
                                    
                                    
                                    <div>   
                                        <input
                                        className='con-form21'
                                        type="number" 
                                        name="precio" 
                                        value={input.precio} 
                                        onChange={hadlerInput}  
                                        placeholder="Precio"/>
                                    </div>
                                    
                                    <div>    
                                        <select className='con-form21' name="" id="">
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                            <option value="">Verduras</option>
                                        </select>
                                    </div>

                                    <div>
                                        <input
                                        className='con-form21'
                                        type="text" 
                                        placeholder='Descripcion'/>
                                    </div>
                                    <div className='con-form-btn'>
                                        <button  onClick={submit} >Crear</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AddProductStyle>
    )
}

export default AddProduct;
