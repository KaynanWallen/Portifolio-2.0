import styled from "styled-components";

export const StyledSkills = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
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
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0 .5rem;
            svg {
                margin-left: 12px;
                height: 70px;
                width: 70px;
            }
            div {
                margin-top: 15px;
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                text-align: center;
                margin-right: .5rem;
                h2 {
                    font-size: 1.2rem;
                }
                p {
                    margin-top: .5rem;
                    font-size: .9rem;
                }
            }
        }
    }
`