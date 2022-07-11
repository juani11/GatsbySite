import { Link } from 'gatsby';
import React from 'react';
import { Grid, Button as SemanticButton } from 'semantic-ui-react'

// import './button.styles.css';

const Button = ({
    floated,
    link,
    width,
    ...buttonProps
}) => {
    return (
        <Grid columns={1}>
            <Grid.Column mobile={16} tablet={16} computer={width} floated={floated}>
                {link ?
                    <Link to={link}>
                        <SemanticButton fluid
                            {...buttonProps}
                        />
                    </Link>
                    : <SemanticButton fluid
                        {...buttonProps}
                    />
                }
            </Grid.Column>
        </Grid>
    );
}

export default Button;