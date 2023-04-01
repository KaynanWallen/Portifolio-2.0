import styled from "styled-components";

export const StyledContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #292929;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 60px;
    gap: 1.5rem 0;

    svg {
        height: 30px;
        width: 30px;
        color: gray;

        &:first-child{
            margin-top: 1rem;
        }
        &:last-child{
            margin-bottom: 2rem;
        }
    }
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem 0;
    }
`