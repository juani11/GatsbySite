const React = require("react")

const { CartProvider } = require("./src/context/cartContext");


require("./src/styles/global.css")
require("typeface-raleway")

exports.shouldUpdateScroll = () => {
  return false;
};

exports.wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      {element}
    </CartProvider>
  )
}