import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0px 20px;
`;

export const Content = styled.div`
    h1 {
        font-size: 72px;
        background: rgb(176,176,176);
        background: radial-gradient(circle, rgba(176,176,176,1) 0%, rgba(9,9,9,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media screen and (max-width: 430px) {
            font-size: 30px;
        }
    }
`;