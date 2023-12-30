import React from 'react'
import { Card, Divisor, LeftOfCard, RightOfCard } from './cardProducts.styles'

interface IProductCardProps {
    productName: string;
    description: string;
    price: number;
    image: string;
  }

export const CardProducts: React.FC<IProductCardProps> = ({ productName, description, price, image }) => {

    const formattedPrice = price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });


  return (
    <Card>
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
