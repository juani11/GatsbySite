import React from "react"
import { Grid, Placeholder } from "semantic-ui-react"

const LinesPlaceholder = () => {
    return (
        <Placeholder>
            <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
    )
}


const RowImagePlaceholder = () => {
    return (
        <Grid.Row textAlign="center">
            <Grid.Column width={10} textAlign="center">
                <Placeholder style={{ height: 200, width: 200 }}>
                    <Placeholder.Image rectangular />
                </Placeholder>
            </Grid.Column>

            <Grid.Column width={6} verticalAlign="middle">
                <LinesPlaceholder />
            </Grid.Column>
        </Grid.Row>
    )
}
const ImagePlaceholder = () => {
    return (
        <Grid columns={2}>
            <RowImagePlaceholder />
            <RowImagePlaceholder />
        </Grid>
    )
}


const WithPlaceholder = WrappedComponent =>
    ({ isLoading, type, ...props }) => {
        return isLoading ?
            type == 'image' ?
                <ImagePlaceholder />
                :
                <LinesPlaceholder />

            : <WrappedComponent {...props} />
    }

export default WithPlaceholder