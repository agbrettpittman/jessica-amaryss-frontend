import Head from 'next/head'
import styled, { keyframes, css } from 'styled-components'
import { useState } from 'react'
import GraphicDesign from '../../pages/GraphicDesign'
import { useRouter } from 'next/router'
import DigitalArt from '../../pages/DigitalArt'

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
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
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

export default function({onTileClick = ()=>{}, hidePage =()=>{}}) {

    const [LandingPageDisappearTrigger, setLandingPageDisappearTrigger] = useState(false)
    const [TileClicked, setTileClicked] = useState(null)
    const Router = useRouter()
    const OptionTileArray = [
        {
            id: 0,
            component: <GraphicDesign />,
            displayName: "Graphic Design",
            route: "/GraphicDesign",
        },
        {
            id: 1,
            component: <DigitalArt />,
            displayName: "Digital Art",
            route: "/DigitalArt",
        },
    ]

    function handleTileClick({ id, component, route}) {
        setTileClicked(id)
        onTileClick(component)
        setLandingPageDisappearTrigger(true)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
        setTimeout(() => {
            hidePage()
            Router.push(route, undefined, {shallow:true})
        }, 2000)
    }

    return (
        <LandingPageGrouping disappearAnimation={LandingPageDisappearTrigger}>
                <SplashWrapper>
                    <LogoDiv/>
                    <DownArrowIndicator src="icons/Arrow SVG.svg" />
                </SplashWrapper>
                <ChoicesWrapper>
                    <OptionsDiv>
                        {OptionTileArray.map(tileData => 
                            <OptionTile 
                                key={tileData.id} 
                                onClick={() => handleTileClick(tileData)} 
                                expand={TileClicked === tileData.id}
                            >
                                {tileData.displayName}
                            </OptionTile>
                        )}
                    </OptionsDiv>
                </ChoicesWrapper>
        </LandingPageGrouping>
    )
}