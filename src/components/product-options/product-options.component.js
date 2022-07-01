import React, { useEffect, useState } from "react";

import ProductOptionPossibleValue from "../product-option/product-option.component";


let checker = (arr, target) => target.every(v => arr.includes(v));


const ProductOptions = ({ options, selectedOptions, setSelectedOptions, variants, setProductVariantFormed, allOptionsSelected }) => {

    const [availableOptions, setAvailableOptions] = useState({});

    const optionClassName = (optionId, optionValue) => {
        if (selectedOptions[optionId] &&
            selectedOptions[optionId] === optionValue) return 'product-option-selected'

        if (availableOptions[optionId] &&
            !availableOptions[optionId].includes(optionValue)) return 'product-option-unavailable'

        return null
    }

    const handleClickLabel = (e, optionId) => {
        const selectedOptionValue = e.target.name;

        setSelectedOptions({
            ...selectedOptions,
            [optionId]: selectedOptionValue
        })

        let otherAvailableOptionsForOptionId = {};
        variants.map(({ options }) => {

            //Si la opcion elegida está dentro de las opciones de la variante, la proceso y me fijo las otras opciones posibles para la opcion (la formacion de la variante)
            if (options.some(o => o.id === optionId && o.value === selectedOptionValue)) {

                const possibleOptions = options.filter(o => o.value != selectedOptionValue)
                possibleOptions.map(po => {
                    const copy = (otherAvailableOptionsForOptionId[po.id]) ? [...otherAvailableOptionsForOptionId[po.id]] : []
                    copy.push(po.value);

                    otherAvailableOptionsForOptionId[po.id] = copy;
                })
            }
        })

        setAvailableOptions({
            ...availableOptions,
            ...otherAvailableOptionsForOptionId
        });
    }


    useEffect(() => {
        //Si la cantidad de opciones que se seleccionaron es igual a la maxima cantidad de opciones posibles, entonces busco el precio de la variante formada
        if (options && allOptionsSelected()) {
            const productVariantFind = variants.find(({ options }) => {
                const valuesOptions = options.map(({ value }) => value)
                return checker(valuesOptions, Object.values(selectedOptions))
            })
            setProductVariantFormed({ ...productVariantFind })
        }
    }, [selectedOptions]);



    return options.map(option =>
        <div key={option.id} style={{ marginBottom: "30px" }}>
            <p className="product-option-name">{option.name}</p>
            <div className="product-option-possibleValues">
                {option.possibleValues.map(value =>
                    <ProductOptionPossibleValue
                        key={value}
                        option={{ id: option.id, value }}
                        className={optionClassName}
                        handleClick={handleClickLabel}
                    />
                )}
            </div>
        </div>
    )
}

export default ProductOptions;