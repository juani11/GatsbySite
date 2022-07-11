import React from 'react'
import { Container } from 'semantic-ui-react'

import { useWindowSize } from '../../hooks/windowsSize'

const DesktopContainer = ({ children }) => {

    const { mobileSize } = useWindowSize()

    return (!mobileSize() ?
        <Container>
            {children}
        </Container>
        : children
    )
}


export default DesktopContainer
