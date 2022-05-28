import styled from "styled-components";
import {Color} from "./color";

export const Text = styled.span.attrs(props => ({
    size:props.size,
    weight:props.weight,
    lineheight: props.line || '22px',
    color: props.color || Color.black,
    cursor: props.cursor || 'default'
}))`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: ${props => props.lineheight};
    color: ${props => props.color};
    cursor: ${props => props.cursor};
`