import React from 'react';
import { Header as SemanticHeader } from 'semantic-ui-react'

import './header.styles.css';

const Header = ({ type, text }) => {
    return (
        <SemanticHeader className="header" as={type}>{text}</SemanticHeader>
    );
}

export default Header;