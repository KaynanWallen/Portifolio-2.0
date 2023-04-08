import styled from "styled-components";

export const StyledSkills = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        margin-top: 5rem;
        width: 75%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        section {
            margin-top: 1rem;
            background: rgba(41, 41, 41, 0.8);
            border-radius: 15px;    
            width: 250px;
            height: 80px;
        }
    }
`