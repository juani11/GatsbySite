import React, { useEffect } from "react";

import { Form, Dropdown, Grid, Radio } from 'semantic-ui-react'

import { provinceOptions } from "./purchaseOrder-form/purchaseOrder-form.data";

import FormField from "./form-field/form-field.component.js";
import FormFieldError from "./form-field-error/form-field-error.component";

import "./shipping.css"

const { Row, Column } = Grid;

const Shipping = (props) => {

    const { register, errors, setValue, unregister, hasShipping, setHasShipping } = props;


    const handleFocus = e => {
        e.target.setAttribute("autocomplete", "nope");
    }

    const handleChange = (_, { name, value }) => {
        setValue(name, value, { shouldValidate: true })
    }

    const handleChangeRadio = (_, { value }) => {
        setHasShipping(value)
    }

    const provinceDropdown = register('province', {
        validate: value => {
            if (!hasShipping) return true
            return !!value || "Debe ingresar una provincia"
        }
    })

    useEffect(() => {
        if (!hasShipping) {
            unregister(["name", "phone", "province", "locality", "zip", "street", "number", "department", "aditional"])
        }
    }, [hasShipping]);

    const RadioHasShipping = ({ label, value }) => {
        console.log("render RadioHasShipping!");
        return (
            <Radio style={{ fontSize: "14px", textTransform: "uppercase" }}
                label={label}
                name='hasShipping'
                value={value}
                checked={value ? hasShipping : !hasShipping}
                onChange={handleChangeRadio}
            />
        )
    }

    return (
        <>
            <div style={{ marginBottom: "35px", }} >
                <Form.Field>
                    <RadioHasShipping
                        label="Sin Envío (Ya acordé para pasar a retirar)"
                        value={false} />
                </Form.Field>
                <Form.Field>
                    <RadioHasShipping
                        label="Con envío"
                        value={true} />
                </Form.Field>
            </div>
            {
                hasShipping &&
                <>
                    <FormField
                        register={register}
                        name="name"
                        error={errors.name}
                        maxLength={25} />

                    <FormField
                        register={register}
                        name="phone"
                        error={errors.phone}
                        maxLength={9} />

                    <Grid columns={3} centered stackable>
                        <Row>
                            <Column width={8}>
                                <Form.Field error={errors.province}>
                                    <label>Provincia</label>
                                    <Dropdown
                                        onFocus={handleFocus}
                                        search
                                        selection
                                        options={provinceOptions}
                                        name={provinceDropdown.name}
                                        onChange={(e, value) => {
                                            provinceDropdown.onChange(e); // method from hook form register
                                            handleChange(e, value); // your method
                                        }}
                                        onBlur={provinceDropdown.onBlur}
                                        ref={provinceDropdown.ref}
                                        defaultValue={15}
                                    // value={getValues('province')}
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

                    <Grid columns={1} centered stackable>
                        <Row>
                            <Column floated='left'>
                                <Form.Field>
                                    <label>Aclaraciones adicionales sobre la dirección (opcional)</label>
                                    <textarea  ></textarea>
                                </Form.Field>
                            </Column>
                        </Row>
                    </Grid>

                </>
            }
        </ >
    )
}

export default Shipping