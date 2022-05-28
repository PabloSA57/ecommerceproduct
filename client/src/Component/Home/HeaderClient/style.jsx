import styled from "styled-components";
import {Color} from '../../../style/color'

export const HeaderCStyle = styled.header`
    height: 60px;
    width: 100%;

    .con{
        margin: auto;
        height: 100%;
        width: 90%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .con1 .divimg{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .divimg img{
        width: 100%;
        height: 100%;
    }

    .con2 div{
        background-color: aqua;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }

`