import { Box } from "@material-ui/core";
import { useCart } from "../../Providers/Cart";
import Card from "../Card/index";
import { style } from "./styles";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <Box sx={style}>
      {cart.map((product) => (
        <Card
          product={product}
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          btnText="REMOVER DO CARRINHO"
        ></Card>
      ))}
    </Box>
  );
};

export default Cart;
