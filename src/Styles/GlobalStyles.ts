import styled, {css} from "styled-components";

export const StyledApp = styled.div`
    height: 100%;
    background-color: black;
    color: white;
    background: rgba(41, 41, 41, 0.9);
    main {
        display: flex;
        height: 90%;
    }
    main > div {
        height: 100%;
    }
    font-family: 'Changa One', cursive;

`

interface iStyledButtonProps {
    buttonSize: "lg" | "md" | "sm";
    buttonStyle: "solid" | "outline";
}

export const StyledButton = styled.a<iStyledButtonProps> `
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    font-family: 'Changa One';
    font-size: 17px;
    transition: 0.4s;
    border-radius: 12px;
    cursor: pointer;
    ${({buttonSize}) => {
        switch(buttonSize) {
            case 'lg':
                return css `
                    padding: 0 2rem;
                    height: 69px;
                `

            case 'md':
                return css `
                    padding: 0 2rem;
                    height: 46px;
                `
            case 'sm':
                return css `
                    padding: 0 1.5rem;
                    height: 42px;
                `
        }
    }}

    ${({buttonStyle}) => {
        switch(buttonStyle){
            case 'outline':
                return css `
                    background: #292929;
                    color: white;
                `
            case 'solid':
                return css `
                    border: 1px solid black;
                    background-color: transparent;
                    color: white;
                    &:hover{
                        background-color: rgb(0, 0, 0, 0.6);
                    }
                `
        }
    }}

    &:hover{
        filter: brightness(1.1);
        box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
    }
`