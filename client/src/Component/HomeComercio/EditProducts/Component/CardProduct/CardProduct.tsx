import React, { useState } from 'react'
import { CardProductStyle } from './style';

import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

import { Producto } from '../../../../../Interface/Comercio';

interface Prop{
    producto: Producto
}
const CardProduct = ({producto}: Prop) => {
    const [activeEdit, setActiveEdit] = useState([false, false]);


    return (
        <CardProductStyle>
                <div className='img-cp'>
                    <img src={producto.img} alt="" />
                </div>

                <div className='name-card'>
                    {activeEdit[0] ?<input type="text" /> :<span>{producto.name}</span>}
                </div>

                <div>
                    {activeEdit[0] ? <input type="text" /> :<span>categoria</span>}
                </div>

                <div>
                    <span>$100</span>
                </div>

                <div className='edit-delete'>
                    <div 
                    className={activeEdit[0] ? "e-d-btn active" : "e-d-btn"}
                    onClick={() => setActiveEdit([true, false])}>
                        <span><RiEditLine /></span>
                    </div>

                    <div 
                    className={activeEdit[1] ? "e-d-btn active" : "e-d-btn"}
                    onClick={() => setActiveEdit([false, true])}>
                        <span><RiDeleteBinLine /></span>
                    </div>
                </div>
        </CardProductStyle>
    ) 
}

export default CardProduct;
