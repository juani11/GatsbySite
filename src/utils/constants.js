const _SHIPPING = 1
const _PICKUP = 2

const navigationData = [
    { name: 'Ilustración', pathname: "/", scrollTop: true },
    { name: 'Libros', pathname: "/books", scrollTop: true },
    { name: 'Bio', pathname: "/bio", scrollTop: false },
    { name: 'Shop', pathname: "/shop", scrollTop: false },
    //{ name: 'Carrito', pathname: "/cart", scrollTop: false },
]

const navigationWithSlideShow = [
    '/books', '/bio', '/shop', '/cart'
]

export { _SHIPPING, _PICKUP, navigationData }