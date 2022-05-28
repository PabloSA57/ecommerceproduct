import React, { useState } from 'react'
import ConfigStore from './ConfigStore/ConfigStore';
import Dashboard from './Dashboard/Dashboard';
import EditProducts from './EditProducts/EditProducts';
import Nav from './Nav/Nav';
import Noti from './Notification-Message/Noti';
import { HComercioStyle } from './style';

const HComercio = () => {
    const [active, setActive]= useState([true, false, false]);

    const handlerActive = (array: [boolean, boolean, boolean]) => {
        setActive(array);
    }

    return (
            <HComercioStyle>
                <Nav funcActive={handlerActive} actives={active}/>

                <>
                {active[0] ? <Dashboard /> : null}
                {active[1] ? <EditProducts /> : null}
                {active[2] ? <ConfigStore /> : null}
                </>
                

                <Noti />
            </HComercioStyle>
    )
}


export default HComercio;