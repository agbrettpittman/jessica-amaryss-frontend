import React from 'react'
import styled from '@emotion/styled'

const FullPage = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-template-areas: "nav content";
`

const SideNav = styled.nav`
    color: gray;
    display: grid;
    height: fit-content;
    gap: 10px;
    padding-top: 10px;
    padding-left: 10px;
`

const NavLink = styled.a`
    font-size: 1.5em;
    font-weight: lighter;
`

const PageContents = styled.div`
    background-color: white;
    padding-left: 10px;
`

function ContentPage({children = <></>}) {
    return (
            <FullPage>
                <SideNav>
                    <NavLink>Home</NavLink>
                    <NavLink>Graphic Design</NavLink>
                    <NavLink>Digital Art</NavLink>
                    <NavLink>About Me</NavLink>
                    <NavLink>Contact</NavLink>
                </SideNav>
                <PageContents>
                    {children}
                </PageContents>
            </FullPage>
    )
}

export default ContentPage