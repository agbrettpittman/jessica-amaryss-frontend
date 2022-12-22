import GraphicDesign from '../components/PseudoPages/GraphicDesign'
import LandingPage from '../components/PseudoPages/LandingPage'
import styled from 'styled-components'
import { useState } from 'react'

export default function() {
    
    const [ShowLandingPage, setShowLandingPage] = useState(true)
    const [ContentPageToDisplay, setContentPageToDisplay] = useState(null)

    return (
        <>
            {ShowLandingPage && <LandingPage onTileClick={setContentPageToDisplay} hidePage={() => setShowLandingPage(false)} />}
            {ContentPageToDisplay}
        </>
    )
}
