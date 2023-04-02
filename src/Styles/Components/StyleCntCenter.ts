import styled from "styled-components";

export const StyledContentCenter = styled.div`
    width: 300px;
    background: rgba(41, 41, 41, 0.75);
    p {
        color: gray;

        &:first-child {
            margin-left: 1rem;
        }
    }
    div {
        width: 100%;
        height: 50px;
        background: #292929;
        border-width: 1px 1px 1px 0px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
            svg {
            height: 30px;
            width: 30px;
            color: gray;
        }
        cursor: pointer;
    }
    > section {
        margin-left: 12px;
        cursor: pointer;
    }
    .align{
        display: flex;
        align-items: center;
        gap: 0 0.3rem;
    }
    
    .hover:hover{
        border-width: 0px 0px 2px 0px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.3);
    }
    .arquivos {
        margin-top:12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0 0.3rem;
        color: gray;
        font-size: 20px;
        svg {
            height: 30px;
            width: 30px;
        }
        > section{
            display: flex;
            gap: 0 0.3rem;
        }
        }
        .subpasta {
            margin-left:1rem;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            .subpasta_arquivos{
                margin-left: 2rem;
                margin-top: 3px;
                display: flex;
                flex-direction: column;
                section {
                    display: flex;
                    align-items: center;
                }
            }            
        }
        .subpasta_projects {
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            .projects {
                gap: 0 0.3rem;
                margin-left: 2rem;
                display: flex;
                align-items: center;
            }
        }

    .html {
        margin-left: .5rem;
    }

`