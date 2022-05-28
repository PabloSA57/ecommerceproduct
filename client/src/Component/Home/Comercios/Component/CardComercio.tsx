import { Comercio } from "../../../../Interface/Comercio";
import { CardComercioStyle } from "../../../../style/cardcomercio";
import { Text } from "../../../../style/text";
import { useState } from "react";
import cc from './cardcomercio.module.css';


interface Prop {
    Comercio: Comercio;
    Func: (id:string) => void;
    active: string
}
 const CardComercio = ({Comercio, Func, active}: Prop) => {
    console.log('render')
  return (
    <CardComercioStyle onClick={() => Func(Comercio.id)} activeColor={active === Comercio.id ? "#ffb331e5" : null}>
        <div className={cc.con}>
            <div className={cc.conimg}>
                <img src={Comercio.img} alt="" />
            </div>

            <div>
                <Text size='12px' weight='200'>
                    Tucuman
                </Text>
                <Text size='14px' weight='500'>
                    {Comercio.name}
                </Text>
            </div>
            
        </div>
        
        
    </CardComercioStyle>
  )
}

export default CardComercio;
