import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Product, useCart } from "../../Providers/Cart/index";

interface CardProps {
  product: Product;
  title: string;
  description: string;
  price: number;
  image: string;
  btnText: string;
  atStore?: boolean;
}

const Card = ({
  title,
  description,
  price,
  image,
  btnText,
  atStore,
  product,
}: CardProps) => {
  const { addProduct, deleteProduct } = useCart();
  return (
    <Box>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>
        <strong>R$ {price}</strong>
      </p>
      <Button
        onClick={() => (atStore ? addProduct(product) : deleteProduct(product))}
      >
        {btnText}
      </Button>
    </Box>
  );
};

export default Card;
