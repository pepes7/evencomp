import styled from "styled-components";
import { colors } from "../../styles/colors";

export const AppInput = styled.input`
    font-family: 'Medium';
    color: ${colors.gray};

    width: ${(props) => props.width ? props.width : "100%"};
 
    height: 45px;

    font-size: 16px;
    
    color: #000;
    background: white;
    border-radius: 7px;
    border: 1px solid #000;

    ::placeholder {
        font-family: 'Medium';
        color: rgba(1, 65, 111, 0.5);
    }
`