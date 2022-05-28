import styled from "styled-components";

export const  AddProductStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: #3b3b3b63;

    .-con{
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .con-edit{
        background-color: #FFFFFF;
        width: 370px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
    }

    .con-form{
        margin: 15px;
        flex-direction: column;
        gap: 20px;
    }


    .con-form22 {
        gap: 30px;
    }
    .con-form1{
        flex-direction: row;
        justify-content: space-between;
    }

    .con-form21{
        height: 50px;
        border-radius: 20px;
        background: #FFFFFF;
        border: 0.4px solid #C4C4C4;
        padding: 0 10px;
    }

    .con-form-btn{
        width: 100%;
        align-items: center;
    }

    .con-form-btn button{
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 20px;
    }
`