import {useContext} from "react";

import {HeaderStyle} from './style';

import {Link} from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5';
import { AiOutlineDown } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { Text } from '../../../style/text';

import { TodoContext } from "../../../Context/Context";



export default function Header() {
    const {todoState, updateTipo} = useContext(TodoContext);
    const {widthPhone, login} = todoState;

    console.log(widthPhone)
  return (
    <HeaderStyle>
        <div className='con'>
            <div>Logo</div>
            {widthPhone ? <div></div>
            :<div className="coninput">
            <input type='text' placeholder='Buscar Productos...'/>
            <button>
                <div className='search'>
                    <GoSearch />
                </div>
            </button>
        </div>
            }
            {login ? <div className='concarrito'>
                <div>
                    <div className='carritonoti'></div>
                    <IoCartOutline />
                </div>
                <div className='concarritoprecio'>
                    <div className='carritoprecio'>
                        <Text size='12px' lineheight='15px' weight='500'>
                            Mi carrito
                        </Text>
                    </div>
                    
                    <div className='carritoprecio'>
                        <Text size='10px' lineheight='15px' weight='500'>
                            $25
                        </Text>
                    </div>
                </div>

                <div className='mas'>
                    <AiOutlineDown />
                </div>
                
            </div>
            :<></>
            }

            {!login ? <div className='btnrorl'>
                <button className='btnlogin'>Login</button>
                <button className='btnregister'>Register</button>
            </div>
            :<div></div>
            }
        </div>
        
    </HeaderStyle>
  )
}
