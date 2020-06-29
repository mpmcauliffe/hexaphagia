import React, { useState, useEffect, useContext, } from 'react'
import StylesContext from '../../context/stylesContext'
import { truncate } from '../../helpers/truncate'


export const Post = ({ frontmatter, linkTo }) => {
    const stylesContext = useContext(StylesContext)
    const { HexLink, PostWrapper, Thumbnail } = stylesContext

    const [cap, setCap] = useState('')

    useEffect(() => {
        /** IMPORTANT FOR DEPLOYMENT
         *  window is `undefined` on serverside rendering
         *  this function prevents the truncate helper from firing 
         *  until this component mounts
         */
        setCap(truncate(frontmatter.caption))

    }, [])


    return (
        <HexLink to={linkTo}>
            <PostWrapper>
                <div  style={{ marginRight: '2rem', }}>
                    <div>
                        <h3>{frontmatter.title}</h3>
                        <p>{frontmatter.date}</p>
                    </div>
                    <p>{cap}</p>
                </div>
                <div>
                    {!!frontmatter.cover 
                        ? (<Thumbnail sizes={frontmatter.cover.childImageSharp.sizes} />) 
                        : null}
                </div>
            </PostWrapper>
        </HexLink>
    )
}
