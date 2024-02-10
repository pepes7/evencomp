import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    #routes-content {
        margin-right: 3rem;
        padding-right: 2rem;
        margin-left: 1rem;
        padding-left: 1rem;

        height: 100%;
    }
`
