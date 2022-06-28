import React from 'react'

import { Container, Fade } from 'reactstrap'
import Loading from '../components/loading/loading.component'
//HOC(Componente de orden superior)..funcion que recibe un componente y devuelve otro componente

// Esta función recibe un componente...
function CheckoutBoxHOC(WrappedComponent, title, colMd) {

    // ...y devuelve otro componente...
    return (props) =>
        <Fade>
            <Container>
                <div className="checkout-box">
                    <div className="checkout-box-title">
                        {/* <div className="checkout-box-badge">
                        </div> */}
                        <h5 className="checkout-box-subtitle">{title}</h5>
                    </div>
                    <Loading loading={!props ? true : false}>
                        <WrappedComponent
                            {...props}
                        />
                    </Loading>

                </div>
            </Container>
        </Fade>
}
export default CheckoutBoxHOC
/*
-Product(id)
1, 'producto numero 1',
2, 'producto numero 2'


-Product_VariantValue (idProduct,idVariantValue,SKUId,price)
1,1,ASD123,450
2,1,DBF324,233,
2,4,ERT354,122

-variant (id, nombre)
1,'tamaño'
2,'color'


-variant_Value(id,idVariant,value)
1,1,'S'
2,1,'M',
3,1,'L',
4,2,'red',
5,2,'blue'


**SKUId: Identifica al (producto) con un (valor) de (variante especifica)


*/
