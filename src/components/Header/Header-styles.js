import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 20px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 72px;
        text-transform: uppercase;
        background: rgb(176,176,176);
        background: radial-gradient(circle, rgba(176,176,176,1) 35%, rgba(9,9,9,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width: 455px) {
            font-size: 30px;
        }
    }

    .cart {
        font-size: 25px;
        margin-right: 40px;
        padding: 2px;
        background: white;
        border: none;
        cursor: pointer;
    }

    span {
        padding: 5px;
    }

    i {
        font-size: 30px;
    }
`;