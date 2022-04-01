const _SHIPPING = 1
const _PICKUP = 2

const navigationData = [
    { id: 1, name: 'Ilustración', pathname: "/", scrollTop: true },
    { id: 2, name: 'Libros', pathname: "/books", scrollTop: true },
    { id: 3, name: 'Bio', pathname: "/bio", scrollTop: false },
    { id: 4, name: 'Shop', pathname: "/shop", scrollTop: false },
    //{ name: 'Carrito', pathname: "/cart", scrollTop: false },
]

const navigationWithSlideShow = [
    '/books', '/bio', '/shop', '/cart'
]

export { _SHIPPING, _PICKUP, navigationData }