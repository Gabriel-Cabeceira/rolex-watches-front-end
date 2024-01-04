import { HomeContainer, HomeTitle, Watches } from './home.styles'
import { WatchCard } from './components/WatchCard/card'
import { GetAllProductsLocalStorage, createProductsLocalStorage } from '../../services/localStorageProducts'
import { useEffect, useState } from 'react';
import { GetAllCartLocalStorage, createCartLocalStorage } from '../../services/localStorageCart';

export const Home = () => {

  const [products, setProducts] = useState<any>([])

  const productStorage = GetAllProductsLocalStorage();

  const cartStorage = GetAllCartLocalStorage();

  if(!productStorage) {
    createProductsLocalStorage();
  }

  if(!cartStorage) {
    createCartLocalStorage();
  }

  useEffect(() => {
    const products = GetAllProductsLocalStorage()

    setProducts(products?.products);
  }, [setProducts])

  return (
    <HomeContainer>
      <HomeTitle>
        <h1>Relógios Rolex</h1>
      </HomeTitle>

      <Watches>
        {products.map((product: any) => (
          <WatchCard key={product.id} {...product} />
        ))}
      </Watches>
    </HomeContainer>
  )
}
