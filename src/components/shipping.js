import React, { useState } from "react";
import {
    Fade, Button,
    Container, Row, Col,
    Form, FormGroup, Label, Input, FormFeedback
} from 'reactstrap';

import CheckoutBoxHOC from "../hoc/checkoutBox";

import "./shipping.css"

const Shipping = (props) => {

    const { checkoutStep } = props;

    const defaultState = {
        value: '',
        valid: null,
        invalid: null
    }

    const [shippingData, setShippingData] = useState({
        name: { ...defaultState },
        cellphone: { ...defaultState },
        province: { ...defaultState },
        town: { ...defaultState },
        zip: { ...defaultState },
        address: { ...defaultState },
    })

    {
        return checkoutStep.contact ?
            (
                <Fade>
                    <Container>
                        <Form style={{ 'padding': '15px' }}>
                            <FormGroup>
                                <Label for="shippingName">Nombre</Label>
                                <Input valid={null} invalid={null} type="text" name="name" id="shippingName" value={shippingData.name.value} />
                                {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="shippingCellphone">Teléfono</Label>
                                <Input type="text" name="cellphone" id="shippingCellphone" value={shippingData.cellphone.value} />
                            </FormGroup>
                            <FormGroup>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup >
                                        <Label for="shippingProvince">Provincia:</Label>
                                        <Input type="select" name="province" id="shippingProvince" value={shippingData.province.value}>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup >
                                        <Label for="shippingTown">Localidad:</Label>
                                        <Input type="text" name="town" id="shippingTown" />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup >
                                        <Label for="shippingZip">C.P:</Label>
                                        <Input type="text" name="zip" id="shippingZip" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="shippingAddress">Dirección</Label>
                                <Input type="text" name="address" id="shippingAddress" />
                            </FormGroup>
                        </Form>
                        {/* <Button disabled>
                    <div style={{ "padding-left": "50px", "padding-right": "50px" }}>
                        <Spinner size="sm" color="light" />
                    </div>
                </Button> */}
                        <div style={{ textAlign: "right", textTransform: "uppercase" }}>
                            <Button onClick={() => { }} >
                                {/* <div style={{ "padding-left": "50px", "padding-right": "50px" }}>
                        <Spinner size="sm" color="light" />
                    </div> */}
                                Proceder al pago
                            </Button>
                        </div>
                    </Container>
                </Fade>
            ) :
            <div></div>
    }
}

export default CheckoutBoxHOC(Shipping, 'Shipping', 6);