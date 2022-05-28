import { Producto } from "../../../../Interface/Comercio";
import { CardProductsStyle} from "./style";
import { Text } from "../../../../style/text";
import { IoCartOutline } from 'react-icons/io5';
interface Prop {
    producto: Producto
}

export const CardProductos = ({producto}: Prop) => {
  return (
        <CardProductsStyle>
            <div className='con'>
                <div className='conimg'><img src={producto.img} alt="" /></div>
                <div className='con1'>
                    <div>
                        <Text size='12px' weight='400' lineheight='15px'>
                            {producto.categoria}

                        </Text>
                    </div>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px'>
                            {producto.name}
                        </Text>
                    </div>
                </div>

                <div className='con2'>
                    <div>
                        <Text size='16px' weight='600' lineheight='20px' color='#FFB531'>
                            {`$${producto.precio}`}
                        </Text>
                    </div>
                    <button>
                        <IoCartOutline /> Add
                    </button>
                </div>
            </div>

        </CardProductsStyle>
        
    
)
}
