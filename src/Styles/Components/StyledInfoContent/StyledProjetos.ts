import styled from "styled-components";

export const StyledProjetos = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85%;
    section {
        height: 100%;
        overflow-y: scroll;
        margin-top: 5rem;
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem 5rem;
        div {
            button {
                margin-top: 2rem;
            }
        }
    }

`