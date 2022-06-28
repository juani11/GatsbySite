
import React from "react";
import { Fade, Container } from "reactstrap";

import './card.styles.css'

const Card = ({ title, children }) => {
    return (
        <Fade>
            <Container>
                <div className="card-box ">
                    <div className="card-box-title">
                        {/* <div className="card-box-badge">
                        </div> */}
                        <h5 className="card-box-subtitle">{title}</h5>
                    </div>
                    {children}
                </div>
            </Container>
        </Fade>

    );
}

export default Card;