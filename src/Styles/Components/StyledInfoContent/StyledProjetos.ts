import styled from "styled-components";

export const StyledProjetos = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    section {
        margin-top: 5rem;
        width: 80%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2rem 5rem;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem 0rem;
            img {
                border-radius: 12px;
                margin-top: .5rem;
                width: 85%;
                height: 35%;
            }

            button {
                margin-top: 2rem;
            }
        }
    }

`