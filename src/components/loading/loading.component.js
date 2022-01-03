import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = ({ loading, children }) => {
    return (
        <Dimmer.Dimmable dimmed={true}>
            <Dimmer active={loading} inverted>
                <Loader><span style={{ fontFamily: "Raleway" }}>Cargando...</span></Loader>
            </Dimmer>
            {children}
        </Dimmer.Dimmable >
    );
}

export default Loading;