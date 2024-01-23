import styled from 'styled-components'
import { colors } from '../../../styles/colors'
import { Uea } from '../../../assets/images'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 60% auto;
    background: ${colors.gray};
    height: 100%;
    width: 100%;
`

export const BoxLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Account = styled.div`
    padding: 1rem;
`

export const BoxAccount = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid white;
    border-radius: 8px;
    background:white ;
`
