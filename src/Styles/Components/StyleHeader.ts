import styled from "styled-components";

export const StyledHeader = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    background: #292929;
    height: 60px;
    color: gray;
    font-size: 20px;
    section {
        padding-right: 1rem;
    }
    svg{
        margin-left: 20px;
        height: 30px;
        width: 30px;
    }
`