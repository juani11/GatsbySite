import React, { useState } from "react";
import {
    Fade, Button,
    Container, Row, Col,
} from 'reactstrap';

import { Form, Label, Dropdown } from 'semantic-ui-react'

import CheckoutBoxHOC from "../hoc/checkoutBox";

import "./shipping.css"

const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
]

const Shipping = (props) => {

    const { onChange, register, errors } = props;


    return (
        <div style={{ 'padding': '15px' }} >
            <Form.Group >
                <label>Envío</label>
                <Form.Radio
                    label='Small'
                    value='sm'
                />
                <Form.Radio
                    label='Medium'
                    value='md'
                />

            </Form.Group>
            <Form.Field error={errors.name ? true : false}>
                <label>Nombre</label>
                <input type="text"  {...register("name",
                    {
                        required: 'Debe ingresar un nombre',
                        maxLength: {
                            value: 10,
                            message: 'Debe ingresar como máximo 10 caracteres'
                        }
                    })} />
                {errors.name && <Label pointing color="red">{errors.name.message}</Label>}
            </Form.Field>
            <Form.Input fluid label='Teléfono' type="text" />
            <Row >
                <Col md={6}>
                    <Dropdown
                        search
                        selection
                        options={countryOptions}
                        placeholder='Choose an option'
                    />

                </Col>
                <Col md={4}>
                    <Form.Input fluid label='Localidad' type="text" name="shippingTown" />
                </Col>
                <Col md={2}>
                    <Form.Input fluid label='C.P' type="text" name="shippingZip" />
                </Col>
            </Row>
            <Form.Input fluid label='Dirección' type="text" name="shippingAddress" />
        </div>
    )

}

export default CheckoutBoxHOC(Shipping, 'Shipping', 6);