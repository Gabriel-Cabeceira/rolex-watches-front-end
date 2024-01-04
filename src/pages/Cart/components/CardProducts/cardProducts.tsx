import { useState } from 'react';
import { GetAllCartLocalStorage, changeCartLocalStorage } from '../../../../services/localStorageCart';
import { Card, Divisor, LeftOfCard, RemoveToCartButton, RightOfCard } from './cardProducts.styles'

interface IProductCardProps {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
  }

export const CardProducts: React.FC<IProductCardProps> = ({id, productName, description, price, image }) => {

    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const [isExcluded, setIsExcluded] = useState<boolean>(false);

    const handleRemoveToCart = () => {
      
      const existingProducts = GetAllCartLocalStorage();
  
      if(existingProducts) {
        const productIndex = existingProducts.cart.findIndex((product: any) => product.id === id)
  
        if(productIndex !== -1) {
          existingProducts.cart.splice(productIndex, 1);
  
          changeCartLocalStorage(existingProducts);
  
          setIsExcluded(true);
        }
      }
    };

    if(isExcluded) {
      return null;
    }


  return (
    <Card>
      <RemoveToCartButton onClick={handleRemoveToCart}>
        <span>X</span>
      </RemoveToCartButton>
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
  )
}
