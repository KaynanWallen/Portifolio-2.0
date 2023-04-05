import styled from "styled-components";

interface iSyledParagraph{ 
    space?: number;
    color?: string;
    link?: boolean;
}

export const StyledParagraph = styled.span<iSyledParagraph> `
    font-family: 'Changa One', cursive;
    color: ${({color}) => color ? color : 'white'};
    margin-left: ${({space}) => space ? space : 0}rem;
    padding: ${({link}) => link ? 5 : 0}px;
`