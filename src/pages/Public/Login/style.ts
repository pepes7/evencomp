import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% auto;
    background: ${colors.gray};
    height: 100%;
    width: 100%;

    @media (max-width: 500px) {
        grid-template-columns: 0 100%;
    }

    @media (max-width: 800px) {
        img{
            width:250px;
            height:250px;
        }
    }
`

export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Account = styled.div`
    padding: 1rem;
    @media (max-width: 500px) {
        padding: 0;
    }
`

export const BoxAccount = styled.div`
    display: flex;
    flex-direction:column ;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 8px;
    background:white ;
`
export const ContainerDatas = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center; 
    width: 500px;
    min-width: 250px;
    flex-grow: 1;

    @media (max-width: 1150px) {
        width: 350px;
    }

    h1{
        font-size: 40px;
        text-align: center;
        margin-bottom: 4rem ;
    }
    span{
        color: var(--neutral-500, #A8A8B3);
        font-size: 16px;
        text-align: end;
        margin-top:0.5rem;
        cursor:pointer;
    }
    .mg-bt-32{
        margin-bottom: 2rem;
    }

    .mg-tp-64{
        margin-top: 4rem;
    }
`

export const NotAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    h4,a{
        font-size: 15px;
        font-weight: normal;
    }

    a{
        font-weight: bold;
        cursor:pointer ;
    }
`