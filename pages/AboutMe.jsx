
import styled from 'styled-components'
import ContentPage from '../components/PseudoPages/ContentPage'

const MainPageBackground = styled.div`
    z-index: 2;
    background-color: red;
    width: 100%;
    min-height: 200vh;
`

export default function() {

    return (
        <ContentPage>
            <h1>About Me</h1>
        </ContentPage>
    )
}