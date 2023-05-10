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

        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent; 
        }
        ::-webkit-scrollbar-thumb {
            background-color: #292929;  
            border-radius: 20px;       
        }
        div {
            .Buttons {
                width: 90%;
                display: flex;
                justify-content: space-around;

                button {
                }
            }
        }
        .Linguagens {
            width: 80%;
            svg {
                height: 30px;
                width: 30px;
                margin:0rem .5rem;
            }
        }
    }


`