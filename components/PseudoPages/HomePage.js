
import styled from 'styled-components'

const MainPageBackground = styled.div`
    z-index: 2;
    background-color: red;
    width: 100vw;
    min-height: 200vh;
`

export default function HomePage() {

    return (
        <MainPageBackground />
    )
}