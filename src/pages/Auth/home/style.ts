import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    #routes-content {
        padding-top: 4rem;
        padding-right: 2rem;
        padding-left: 4rem;
        background:${colors.gray};
        height: 100%;
    }
`
