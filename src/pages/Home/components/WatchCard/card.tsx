import { useState } from 'react';
import { AddToCartButton, Card, Divisor, LeftOfCard, RightOfCard } from './card.styles';
import { BsCart, BsCartCheckFill } from "react-icons/bs";


interface WatchCardProps {
  productName: string;
  description: string;
  price: number;
  image: string;
}

export const WatchCard: React.FC<WatchCardProps> = ({ productName, description, price, image }) => {


  const [added, setAdded] = useState(false);

  const formattedPrice = price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  });

  return (
    <Card>
      <AddToCartButton
        onClick={
          () => setAdded(!added)
        }>


        {added ? (<BsCartCheckFill style={{color: ' #2bad7d'}} />) : <BsCart />}
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
