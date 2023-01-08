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
`

const NavLink = styled.h2`
`

const PageContents = styled.div`
    background-color: white;
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