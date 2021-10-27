import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 30px;
    h1 {
        text-align: center;
        text-transform: uppercase;
        font-size: 45px;
    }

    img {
     display: block;
     margin-left: auto;
     margin-right: auto;
     width: 60%;
     height: 100%;
    }

    h2 {
        font-size: 32px;
        text-transform: uppercase;
    }

    h3 {
        font-size: 26px;
        text-transform: uppercase;
        border-top: 1px solid #e2e2e2;
        padding-top: 20px;
    }

    p {
        font-size: 20px;
        text-transform: capitalize;
    }

    li {
        font-size: 18px;
    }

    .button {
        margin-left: 10px;
        cursor: pointer;
    }

    @media screen and (min-width: 990px) {
        display: flex;
        
        h1 {
            text-align: left;
        }
    }

    @media screen and (max-width: 450px) {
        h1 {
            font-size: 38px;
        }

        img {
            width: 80%;
        }
    }
`;

