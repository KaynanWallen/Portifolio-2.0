import styled from "styled-components";

export const StyledHomeContent = styled.div `
    font-family: sans-serif;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .infos {
        width: 100%;
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
        section {
            margin-top: 20px;
            cursor: pointer;
        }
    }

    @media (max-width: 800px) {
        .infos {
            h3 {
                font-size: 3.5rem;
            }
            h4 {
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 720px) {
        .infos {
            margin-left: 0px;
            text-align: center;
            div {
                margin-left: 0px;

                section {
                    margin-top: 16px;
                    justify-content: center;
                }
            }
            h3 {
                font-size: 2.5rem;
            }
            h4 {
                font-size: 1.2rem;
            }
        }
    }
`