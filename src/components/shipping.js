import React, { useState } from "react";
import { Row, Col } from 'reactstrap';

import { Form, Label, Dropdown, Grid, Image, TextArea } from 'semantic-ui-react'

import CheckoutBoxHOC from "../hoc/checkoutBox";
import FormField from "./form-field/form-field.component.js";
import FormFieldError from "./form-field-error/form-field-error.component";

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

    const { register, errors, setValue } = props;
    const { Row, Column } = Grid;

    const handleFocus = e => { e.target.setAttribute("autocomplete", "nope"); }

    const handleChange = (e, { name, value }) => {
        setValue(name, value, { shouldValidate: true })
    }

    const provinceDropdown = register('province', { required: 'Debe ingresar una provincia' })


    return (
        <div style={{ 'padding': '15px' }} >
            <Form.Group >
                <Form.Radio
                    label='Sin Envío (Ya acordé para pasar a retirar)'
                    value='sf'
                />
                <Form.Radio
                    label='Con Envío'
                    value='st'
                />

            </Form.Group>

            {/* Name */}
            <FormField
                register={register}
                name="name"
                error={errors.name}
                maxLength={20} />

            {/* Phone */}
            <FormField
                register={register}
                name="phone"
                error={errors.phone}
                maxLength={9} />

            <Grid columns={3} centered stackable>
                <Row>
                    <Column width={8}>
                        <Form.Field error={errors.province ? true : false}>
                            <label>Provincia</label>
                            <Dropdown
                                onFocus={handleFocus}
                                search
                                selection
                                options={countryOptions}
                                name={provinceDropdown.name}
                                onChange={(e, value) => {
                                    provinceDropdown.onChange(e); // method from hook form register
                                    handleChange(e, value); // your method
                                }}
                                onBlur={provinceDropdown.onBlur}
                                ref={provinceDropdown.ref}
                            />
                            {errors.province && <FormFieldError>{errors.province.message}</FormFieldError>}
                        </Form.Field>
                    </Column>
                    <Column width={5}>
                        <FormField
                            register={register}
                            name="locality"
                            error={errors.locality}
                            maxLength={20} />
                    </Column>
                    <Column width={3}>
                        <FormField
                            register={register}
                            name="zip"
                            error={errors.zip}
                            maxLength={4} />
                    </Column>
                </Row>
            </Grid>

            {/* Calle ...Numero*/}
            <Grid columns={2} centered stackable>
                <Row>
                    <Column width={8}>
                        <FormField
                            register={register}
                            name="street"
                            error={errors.street}
                            maxLength={15} />
                    </Column>
                    <Column width={8}>
                        <FormField
                            register={register}
                            name="number"
                            error={errors.number}
                            maxLength={5} />
                    </Column>
                </Row>
            </Grid>

            {/* Piso/Departamento */}
            <Grid columns={1} centered stackable>
                <Row>
                    <Column width={8} floated='left'>
                        <FormField
                            register={register}
                            name="department"
                            error={errors.department}
                            maxLength={10} />
                    </Column>
                </Row>
            </Grid>

            <Form.Field>
                <label>Aclaraciones adicionales sobre la dirección (opcional)</label>
                <textarea placeholder="Descripción de la fachada,referencias,indicaciones de seguridad,etc" style={{ maxHeight: 80 }} ></textarea>
            </Form.Field>
        </div>
    )

}

export default CheckoutBoxHOC(Shipping, 'Información de Envío', 6);