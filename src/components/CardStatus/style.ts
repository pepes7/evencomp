import styled from "styled-components";

interface Tprops{
    color: string
}
export const CardStatusEvent = styled.div<Tprops>`
    background: ${props => props.color};
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
`