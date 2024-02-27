import styled from "styled-components";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    span{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.4);
        margin-top: 2rem;
    }
   
   .icon{
      width:35px;
      height:35px;
      color: ${colors.green};
      cursor: pointer;
   }

   .icon-delete{
      width:30px;
      height:30px;
      color: #FF0000 ;
      cursor: pointer;
   }
`

export const TableStyled = styled.table`
  width: 1000px;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
  margin-top: 3.5rem;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
`;

export const TableRow = styled.tr`
    text-align: center;
    &:hover{
        background: white;
        cursor: pointer;
    }
`;

export const TableCell = styled.td`
  padding: 10px;
`;