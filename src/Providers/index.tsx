import { CartProvider } from "../Providers/Cart/index";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Provider = ({ children }: ProvidersProps) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Provider;
