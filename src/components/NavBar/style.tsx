import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

interface StyledContainer {
    open?: boolean
}

export const Container = styled.div<StyledContainer>`
    width: 250px;
    height: 100%;
    background-color: ${colors.green};
    ${(props) =>
        props.open
            ? css`
                  width: 250px;
              `
            : css`
                  width: 70px;
                  .text{
                      display: none;
                  }
              `};
`
export const Menu = styled.div<StyledContainer>`
    .item-menu {
        display: ${(props) => (props.open ? 'block' : 'flex')};
        padding: 15px 5px 2px 5px;
        cursor: pointer;
        .actived {
            border-radius: 10px;
            background: white;
            color: black;
        }
    }
`
export const Nav = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    min-height: 48px;
    padding: 0px 14px;
    color: white;
    font-size: 24px;
    align-items: center;

    .icon{
        width: 39px;
        height: 35px;
    }

    .text {
        font-weight: 600;
        margin-left: 12px;
    }
`

export const ControlMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    min-height: 48px;
    padding: 0px 14px;
    margin-top: 2rem;
    color: white;
    font-size: 24px;
    align-items: center;
    .icon{
        width: 35px;
        height: 30px;
        cursor: pointer;
    }

    .text {
        font-weight: 600;
        margin-left: 12px;
    }
`