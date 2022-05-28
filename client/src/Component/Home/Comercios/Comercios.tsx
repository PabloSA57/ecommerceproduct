import { useContext, useState } from 'react';
import CardComercio from './Component/CardComercio';
import { ComercioStyle } from './style';
import { Text } from '../../../style/text';
import { DivRow } from '../../../style/productos';
import { CarouselComercio } from '../../../style/cardcomercio';

import { TodoContext } from '../../../Context/Context';

const comercios =  [
  {
      id: "1",
      name: "Las Sierras",
      img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
      lugar: "Tucuman-YerbaBuena"
  },
  {
      id: "2",
      name: "Los Rios",
      img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
      lugar: "Tucuman-YerbaBuena"
  },
  {
    id: "3",
    name: "Los Rios",
    img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
    lugar: "Tucuman-YerbaBuena"
},
{
  id: "4",
  name: "Los Rios",
  img: "https://laverdadonline.com/wp-content/uploads/2020/12/almacen.jpg",
  lugar: "Tucuman-YerbaBuena"
}
]
  const Comercios = () => {
    const {todoState} = useContext(TodoContext);
    //const {comercios} = todoState;
    const [active, setActive] = useState<string>('');



    const select = (id: string) => setActive(id)

    return (
      <ComercioStyle> 
          <DivRow>
            <div>
              <Text size='20px' weight='520' lineheight='20px'>Comercios</Text>
            </div>
            <div>
              filtro
            </div>
          </DivRow>

        <div className='concardcomercio'>
          <CarouselComercio>
            {comercios.map((c) => <CardComercio Comercio={c} key={c.id} Func={select} active={active}/>)}
          </CarouselComercio>
        </div>
      </ComercioStyle>
    )
}

export default Comercios;
