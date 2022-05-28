import { Text } from "../../../style/text"
import { PresentacionStyle } from "./style"
import carrito from '../../../public/carrito.png';

export default function Presentacion() {
  return (
    <PresentacionStyle>
        <div className='presentacion'>
          <div className='Eslogan'>
            <p>
              Todo lo que buscas en el dia.
            </p>
          </div>
          <div className='pngcarrito'>
            <div>
              <img src={carrito} alt="" />
            </div>
          </div>
        </div>
    </PresentacionStyle>
  )
}
