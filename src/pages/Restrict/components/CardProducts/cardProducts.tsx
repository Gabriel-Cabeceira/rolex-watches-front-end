import { Card, Divisor, ExcludeButton, LeftOfCard, RightOfCard } from './cardProducts.styles'
import { GetAllProductsLocalStorage, changeProductsLocalStorage } from '../../../../services/localStorageProducts';
import { useState } from 'react';


interface IProductCardProps {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
  }

export const CardProducts: React.FC<IProductCardProps> = ({ id, productName, description, price, image }) => {

  const formattedPrice = price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });

  const [isExcluded, setIsExcluded] = useState<boolean>(false);

  const handleExcludeClick = () => {
      
    const existingProducts = GetAllProductsLocalStorage();

    if(existingProducts) {
      const productIndex = existingProducts.products.findIndex((product: any) => product.id === id)

      if(productIndex !== -1) {
        existingProducts.products.splice(productIndex, 1);

        changeProductsLocalStorage(existingProducts);

        setIsExcluded(true);
      }
    }
  };

  if(isExcluded) {
    return null
  }


  return (
    <Card>
        <LeftOfCard>
          <ExcludeButton onClick={handleExcludeClick}>x</ExcludeButton>
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
