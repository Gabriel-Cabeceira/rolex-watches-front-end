import { useEffect, useState } from 'react';
import { Container, Main, ContainerCart, ContainerProducts, Title, ProductsList, Price, FinishPurchase } from './cart.styles';
import { GetAllCartLocalStorage } from '../../services/localStorageCart';
import { CardProducts } from './components/CardProducts/cardProducts';



export const Cart = () => {

  const [cartProducts, setCartProducts] = useState<any>([]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const cart = GetAllCartLocalStorage()

    setCartProducts(cart?.cart);
  }, [setCartProducts])

  useEffect(() => {

    const calculateTotalPrice = () => {
      if (cartProducts.length > 0) {
        const total = cartProducts.reduce((accumulator: any, product: any) => {
          // Supondo que cada produto tenha um campo "price"
          const productPrice = product.price || 0;
          return accumulator + productPrice;
        }, 0);
        setTotalPrice(total);
      } else {
        setTotalPrice(0);
      }
    };

    calculateTotalPrice();
  }, [cartProducts]);

  return (
    <Main>
      <Container>
        <ContainerCart>
          <Title>Carrinho</Title>

          <ProductsList>
          {cartProducts.map((product: any) => (
            <CardProducts key={product.id} {...product} />
          ))}
        </ProductsList>

        </ContainerCart>

        <ContainerProducts>
          <Title>Finalizar Compra</Title>
          
          <Price>
            <h1>Total: {totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
            <FinishPurchase>Finalizar compra</FinishPurchase>
          </Price>
        
        <ProductsList>

        </ProductsList>

        </ContainerProducts>
      </Container>
    </Main>
  );
};
