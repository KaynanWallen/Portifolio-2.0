import styled from "styled-components";

export const StyledCard = styled.div `
        background-color: blue;
        height: 400px;
        width: 350px;
        background: rgba(41, 41, 41, 0.8);
        border-radius: 15px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem 0rem;
        text-align: center; 

        img {
                border-radius: 12px;
                margin-top: .5rem;
                width: 85%;
                height: 35%;
        }
`