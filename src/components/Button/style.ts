import styled from "styled-components"
import { colors } from "../../styles/colors";

interface TProps {
    width?: string
    height?: string
}


export const Button = styled.button<TProps>`
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    width: ${(props) => (props.width ? props.width : '100px')};

    height: ${(props) => props.height};

    font-size: 25px;
    color: white;

    background: ${colors.green};
    border: 1px solid transparent;

    border-radius: 25px;
`

export const SecondaryBtn = styled(Button)<TProps>`
    color: ${colors.green};
    border: 1px solid ${colors.green};
    background: none;
`