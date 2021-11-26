const rules = {
    email: {
        required: 'Debe ingresar un email',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email inválido'
        }
    },
    name: {
        required: 'Debe ingresar un nombre',
        maxLength: {
            value: 20,
            message: 'Debe ingresar como máximo 20 caracteres'
        }
    },
    phone: {
        required: 'Debe ingresar un teléfono',
        pattern: {
            value: /^[0-9]*$/,
            message: 'Nro de teléfono inválido'
        },
        maxLength: {
            value: 9,
            message: 'Debe ingresar como máximo 9 digitos'
        }
    },
    province: {
        required: 'Debe ingresar una provincia'
    },
    locality: {
        required: 'Debe ingresar una localidad'
    },
    zip: {
        required: 'Debe ingresar un código postal',
        pattern: {
            value: /^[0-9]*$/,
            message: 'Código postal inválido'
        },
        maxLength: {
            value: 4,
            message: 'Debe ingresar como máximo 4 digitos'
        }
    },
    street: {
        required: 'Debe ingresar una calle',
    },
    number: {
        required: 'Debe ingresar un número',
    },
    department: {
        maxLength: {
            value: 10,
            message: 'Debe ingresar como máximo 10 caracteres'
        }
    },
    additional: {
        maxLength: {
            value: 30,
            message: 'Debe ingresar como máximo 30 caracteres'
        }
    }
}

const formConfig = {
    email: {
        label: 'Email',
        rules: { ...rules.email }
    },
    name: {
        label: 'Nombre y Apellido',
        rules: { ...rules.name }
    },
    phone: {
        label: 'Teléfono',
        rules: { ...rules.phone }
    },
    province: {
        label: 'Provincia',
        rules: { ...rules.province }
    },
    locality: {
        label: 'Localidad',
        rules: { ...rules.locality }
    },
    zip: {
        label: 'C.P',
        rules: { ...rules.zip }
    },
    street: {
        label: 'Calle',
        rules: { ...rules.street }
    },
    number: {
        label: 'Numero',
        rules: { ...rules.number }
    },
    department: {
        label: 'Piso/Departamento (Opcional)',
        rules: { ...rules.department }
    },
    additional: {
        label: 'Aclaraciones adicionales',
        rules: { ...rules.additional }
    }
}

export default formConfig;