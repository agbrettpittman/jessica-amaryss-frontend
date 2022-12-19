import Head from 'next/head'
import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'

const LogoDiv = styled.div`
    border: 2px solid white;
    border-radius: 50%;
    height: 20vw;
    width: 20vw;
`

const DownArrowIndicator = styled.img`
    margin-bottom: 2vh;
`

const ChoicesWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SplashWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 30vh;
    align-items: center;
`

const tileExpansion = keyframes`
    0% { transform: scale(1); }
    100% { transform: scale(10); }
`

const LandingDisappearance = keyframes`
    0% { 
        opacity: 1; 
        display: block;
    }
    100% { 
        opacity: 0; 
        display: none;
    }
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
    background-color: green;
    ${(props) => {
        if (props.expand) {
            return css`
                animation-name: ${tileExpansion};
                animation-timing-function: ease;
                animation-duration: 2s;
                animation-fill-mode: forwards;
            `
        }  
    }}
`

const LandingPageGrouping = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    background-color: #b6c8c8;
    display: ${(props) => (props.active) ? "block" : "none"};
    ${(props) => {
        if (props.disappearAnimation) {
            return css`
                animation-name: ${LandingDisappearance};
                animation-timing-function: ease;
                animation-duration: 2s;
                animation-fill-mode: forwards;
            `
        }  
    }}
`

export default function Home() {

    const [LandingPageDisappearTrigger, setLandingPageDisappearTrigger] = useState(false)
    const [LandingPageActive, setLandingPageActive] = useState(true)
    const [TileClicked, setTileClicked] = useState(0)

    function handleTileClick(tileNumber) {
        setTileClicked(tileNumber)
        setLandingPageDisappearTrigger(true)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        setTimeout(() => {
            setLandingPageActive(false)
        }, 2000)
    }

    return (
        <LandingPageGrouping disappearAnimation={LandingPageDisappearTrigger} active={LandingPageActive}>
                <SplashWrapper>
                    <LogoDiv/>
                    <DownArrowIndicator src="icons/Arrow SVG.svg" />
                </SplashWrapper>
                <ChoicesWrapper>
                    <OptionsDiv>
                        <OptionTile onClick={() => handleTileClick(1)} expand={TileClicked === 1}/>
                        <OptionTile onClick={() => handleTileClick(2) } expand={TileClicked === 2}/>
                    </OptionsDiv>
                </ChoicesWrapper>
        </LandingPageGrouping>
    )
}