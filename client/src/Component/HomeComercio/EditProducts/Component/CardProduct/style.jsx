import styled from "styled-components";

export const  CardProductStyle = styled.div` 
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4px;

    .img-cp{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .img-cp img{
        width: 100%;
        height: 100%;
    }

    .name-card{
        width: 80px;
    }

    .edit-delete{
        flex-direction: row;
        gap: 20px;
    }

    .e-d-btn{
        color: #0a0a0a;
    }

    .active{
        color: #d55f0b;
    }
`