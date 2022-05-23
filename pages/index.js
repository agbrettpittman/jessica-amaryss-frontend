import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const LogoDiv = styled.div`
    border: 2px solid white;
    border-radius: 50%;
    height: 20vw;
    width: 20vw;
`

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OptionsDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: 20vw;
`

const OptionTile = styled.div`
    border: 2px solid white;
    height: 20vw;
    width: 20vw;
`



export default function Home() {
    return (
        <>
            <Wrapper>
                <LogoDiv/>
                <img src="icons/Arrow SVG.svg" />
            </Wrapper>
            <Wrapper>
                <OptionsDiv>
                    <OptionTile />
                    <OptionTile />
                </OptionsDiv>
            </Wrapper>
        </>
    )
}
