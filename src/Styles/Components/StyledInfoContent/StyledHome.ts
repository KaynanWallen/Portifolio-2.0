import styled from "styled-components";

export const StyledHomeContent = styled.div `
    font-family: sans-serif;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    .infos {
        width: 520px;
        margin-left: 40px;
        div {
            margin-left: 40px;

            section {
                display: flex;
                gap: 0 5rem;
                
            }
        }
        h1 {
            font-size: 1.5rem;
        }
        h3 {
            font-size: 4rem;
        }
        h4 {
            font-size: 2rem;
        }
    }

`