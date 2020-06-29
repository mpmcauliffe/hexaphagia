import React, { useState, } from 'react'
import styled from 'styled-components'
import { ThemeProvider, } from 'styled-components'
import stylesContext from './stylesContext'
import { GlobalStyles } from './globalStyles'
import { darkTheme, lightTheme } from './theme'
import { Link as GatsbyLink } from 'gatsby'
import Img from 'gatsby-image'


// CONTAINERS
const OuterContainer = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    background-color: ${p => p.theme.secondaryBackground};
    transition: 1s;
`

const MainContainer = styled.main`
    width: ${p => p.article ? '90vw' : '100vw'}; 
    margin: 8.2rem auto 0 auto;

    h6 {
        text-align: center;
    }
    h1, h2, h3, h4, h5, h6, p, li {
        color: ${p => p.theme.mainContent}
        transition: 1s;
    }

    @media (min-width: 769px) {
        width: 90%;
        margin: 15rem auto 0 auto;
    }
    @media (min-width: 1025px) {
        width: 60%;
        margin: 20rem auto 0 auto;
    }
    @media (min-width: 1601px) {
        width: 50%;
        margin: 25rem auto 0 auto;
    }
`
const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 15rem;
    margin-bottom: .2rem;
    padding: 2rem;
    background-color: ${p => p.theme.primaryBackground};
    transition: 1s;

    >div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding-right: .5rem;
    }

    div > h3, div > p {
        margin: 0;
        line-height: 100%;
    }

    @media (min-width: 769px) {
        margin: 2rem 0;
        border-radius: .5rem;
    }
    @media (min-width: 1025px) {
        height: 20rem;
        margin: 5rem 0;

        div > h3 { margin-bottom: .5rem; }
    }
    @media (min-width: 1025px) {
        height: 25rem;
        margin: 7rem 0;
    }
    @media (min-width: 1601px) {
        height: 30rem;
        margin: 7rem 0;
    }
`

// TEXT
const ArticleTitle = styled.h2`
    font-size: 7rem;
    margin: 12rem 0 0 0;
`
const ArticleDate = styled.p`
    margin: -1rem 0 3rem 0;
    font-style: italic;
`
const Caption = styled.p`
    line-height: 100%;
    margin-bottom: 4rem;
`

// LINK
const Link = ({ children, ...props }) => {
    return (
        <GatsbyLink {...props}>
            {children}
        </GatsbyLink>
    )
}
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.mainContent};
    cursor: pointer;
`
const HexLink = props => {
    return (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    )
}

// IMAGES
const Thumbnail = styled(Img)`
    border-radius: .5rem;
    width: 15rem;

    @media (min-width: 481px) {
        width: 18rem;
    }
    @media (min-width: 769px) {
        width: 22rem;
    }
    @media (min-width: 1025px) {
        width: 33rem;
    }
    @media (min-width: 1601px) {
        width: 37rem;
    }
`
const Parallax = styled.img`
    background-image: url('./darkHex-backer.svg');
    top: 0;
    position: fixed;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

// PROVIDER COMPONENT
const StylesProvider = props => {
    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const handleThemeChange = () => setIsDarkTheme(!isDarkTheme)

    return (
        <stylesContext.Provider
            value={{
                OuterContainer,
                MainContainer,
                PostWrapper,

                HexLink,

                ArticleTitle,
                ArticleDate,
                Caption,

                Thumbnail,
                Parallax,

                isDarkTheme,
                handleThemeChange,
            }}>
            <ThemeProvider 
                theme={isDarkTheme 
                    ? darkTheme
                    : lightTheme }>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </stylesContext.Provider>
    )
}


export default StylesProvider
