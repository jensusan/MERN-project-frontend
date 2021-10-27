import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:white;
    border: 3px solid black;
    text-transform: uppercase;
    box-sizing: border-box;

    .close {
        border: none;
        margin-left: 85%;
        background-color: white;
        font-size: 15px;
        margin-top: 5px;
        text-transform: uppercase;
        cursor: pointer;
    }

    i {
        font-size: 20px;
        padding-right: 5px;
    }

    .checkout {
        text-transform: uppercase;
        background-color: black;
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 20px;
        margin: 10px;
        cursor: pointer;
    }

    span {
        margin: 20px;
    }

    div {
        margin: 30px;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .checkoutItems {
        display: flex;
        justify-content: center;
    }
    
    @media screen and (max-width: 505px) {
       div {
          display: flex;
          flex-direction: column;
       }

       span {
           margin: 5px;
       }
    }

`;