import { HomeContainer, HomeTitle, Watches } from './home.styles'
import { WatchCard } from './components/WatchCard/card'
import { createLocalStorage, GetAllLocalStorage } from '../../services/localStorageProducts'
import { useEffect, useState } from 'react';

export const Home = () => {

  const [products, setProducts] = useState<any>([])

  const productStorage = GetAllLocalStorage();

  if(!productStorage) {
    createLocalStorage();
  }

  useEffect(() => {
    const products = GetAllLocalStorage()

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
