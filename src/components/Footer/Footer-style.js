import styled from "styled-components";

export const Content = styled.div`
    div {
        display: flex;
        justify-content: center;
        margin: 40px;
    }

    .fa {
        background: black;
        color: white;
        padding: 15px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        margin: 10px;
    }

    .fa:hover {
        transform: scale(1.1);
    }

    .fa-facebook {
        padding: 15px 18px;
    }

    p {
        text-align: center;
    }
`;