
import React from "react";
import { Fade } from "reactstrap";
import DesktopContainer from "../desktop-container/desktop-container.component";

import './card.styles.css'

const Card = ({ title, children }) => {

    return (
        <Fade>
            <DesktopContainer >
                <div className="card-box ">
                    <div className="card-box-title">
                        <h5 className="card-box-subtitle">{title}</h5>
                    </div>
                    {children}
                </div>
            </DesktopContainer>
        </Fade>
    );
}

export default Card;