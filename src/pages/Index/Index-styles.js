import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
`;

export const Container = styled.div`
    border: 3px black solid;
    box-shadow: 5px 5px 5px rgb(176,176,176);;
    padding: 20px;
    margin-bottom: 10px;
   h1 {
        color: black;
        text-transform: uppercase;
        font-size: 27px;
    }

    img {
        width: 400px;
        height: auto;

    }

    @media screen and (max-width: 500px) {
        width: 350px;
        padding: 5px;
        
        img {
            width: 340px;
        }
    }
`;