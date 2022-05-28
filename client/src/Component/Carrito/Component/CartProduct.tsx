import { Producto } from '../../../Interface/Comercio';
import { CardCartProductStyle } from '../../../style/carrito';

import cp from './cartproduct.module.css'


interface Prop {
    productos: Producto
}

const CartProduct = ({productos}: Prop) => {
    
    console.log(productos)
    return (
            <CardCartProductStyle>
                <article className={cp.con}>
                    <div className={cp.con1}>
                        <div className={cp.imgdiv}>
                            <img src={productos.img} alt="" />
                        </div>
                        <div>
                                <span>{productos.name} pablo</span>
                        </div>
                    </div>
                    
                    <div className={cp.con12}>
                        
                        <div>
                            <select name="" id="">
                                <option value="">1kg</option>
                            </select>
                        </div>

                        <div>
                            <span>$ {productos.precio}</span>
                        </div>
                    </div>
                </article>
            </CardCartProductStyle>
    )
}

export default CartProduct;