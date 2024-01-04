import { useState } from 'react';
import { AddToCartButton, Card, Divisor, LeftOfCard, RightOfCard } from './card.styles';
import { BsCart, BsCartCheckFill } from 'react-icons/bs';
import { GetAllProductsLocalStorage } from '../../../../services/localStorageProducts';
import { addProductToCartLocalStorage, GetAllCartLocalStorage } from '../../../../services/localStorageCart';

interface WatchCardProps {
  id: number;
  productName: string;
  description: string;
  price: number;
  image: string;
}

export const WatchCard: React.FC<WatchCardProps> = ({ id, productName, description, price, image }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleIncludeToCart = () => {

    setAddedToCart(true);

    const existingProducts = GetAllProductsLocalStorage();

    if (existingProducts) {

      const productIndex = existingProducts.products.findIndex((product: any) => product.id === id);

      if (productIndex !== -1) {
        // Add product to cart localstorage
        addProductToCartLocalStorage(existingProducts.products[productIndex]);
      }
    }
  };

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <Card>
      <AddToCartButton onClick={handleIncludeToCart}>
        {addedToCart ? <BsCartCheckFill style={{ color: ' #2bad7d' }} /> : <BsCart />}
      </AddToCartButton>
      <LeftOfCard>
        <Divisor>
          <h1>{productName}</h1>
          <p>{description}</p>
          <p>{formattedPrice}</p>
        </Divisor>
      </LeftOfCard>
      <RightOfCard>
        <img src={image} alt="Rolex Watch" />
      </RightOfCard>
    </Card>
  );
};
