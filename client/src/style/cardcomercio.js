import styled from "styled-components";
import {Color} from "./color"

export const CardComercioStyle = styled.div.attrs(props => ({
    activeColor: props.activeColor || "rgba(173, 173, 173, 0.25)"
}))`
    width: 140px;
    height: 150px;
    margin-right: 10px;
    border:1px solid ${props => props.activeColor};
    border-radius: 5px;
    cursor: pointer;



    &:hover {
        box-shadow: 1px  2px 5px grey;
    }

`
export const CarouselComercio = styled.section`
    
    flex-direction:row;
    overflow-x: scroll;
    overflow-y: hidden;
`