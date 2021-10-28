import { createContext, ReactNode, useContext, useState } from "react";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// interface para tipar as props
interface CartProps {
  children: ReactNode;
}

interface CartProviderData {
  // cart é um array de produtos
  cart: Product[];
  // addProduct recebe um produto e não tem retorno
  addProduct: (product: Product) => void;
  // deleteProducts recebe um produto e não tem retorno
  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (item) => item.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
