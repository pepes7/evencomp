import styled, { css } from "styled-components"

interface StyledContainer {
    open?: boolean
}

export const PerfilCard = styled.div<StyledContainer>`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 7px;
    width: 192px;
    height: 62px;
    
    color: #CCCCCC;

    ${(props) =>
        props.open
            ? css`
                  border: 1px solid #CCCCCC;
                  border-radius: 30px;
              `
            : css`
                border: none;
                span{
                    display: none;
                }
              `};

    .icon{
        color: white;
        width: 32px;
        height: 32px;
    }

    &:hover{
        background: white;
        cursor: pointer;
        color: black;
    }

    span {
        font-weight: 600;
        font-size: 20px;
        white-space: nowrap; /* Impede que o texto quebre em várias linhas */
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: #0CDAC6;
    margin-left:7px;

    font-weight: 600;
    font-size: 20px;
    color: #F2F2FA;

`