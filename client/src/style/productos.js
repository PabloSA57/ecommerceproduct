import styled from "styled-components";
import {Color} from './color';

export const ContainProductStyle = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 2.6%;
    min-height: 300px;

    @media (max-width: 768px) {
        gap: 10%;
    }
`
export const Contain2ProductStyle = styled.div`
    margin: 5px;
    height: 100%;
    justify-content: space-around;
`

export const CardProductStyle = styled.div`
    background-color: #FFFFFF;
    width: 23%;
    height: 300px;
    border: 1px solid rgba(173, 173, 173, 0.25);
    border-radius: 3px;

    @media (max-width: 700px) {
        height: 150px;
        width: 40%;
    }

`

export const ButtonAddStyle = styled.button`
    width: 89.5px;
    height: 33.67px;
    background-color: ${Color.buttonadd};
    color: ${Color.primary};
    border: none;
    border-radius: 2px;
    box-shadow: 5px 5px 5px 0px lightgray;
`

export const DivRow = styled.div`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`