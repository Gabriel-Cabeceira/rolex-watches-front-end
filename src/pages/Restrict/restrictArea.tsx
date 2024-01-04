import { useContext, useEffect, useState } from 'react';
import { Container, Main, ContainerForm, ContainerProducts, UserName, Title, ProductsList } from './restrict.styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { GetAllLocalStorage } from '../../services/localStorageLogin';
import { FormCreateProducts } from './components/FormCreateProducts/Form';
import { CardProducts } from './components/CardProducts/cardProducts';
import { GetAllProductsLocalStorage } from '../../services/localStorageProducts';


interface IUserData {
  login: boolean;
  userId: string;
  name: string;
  token: string;
}

export const RestrictArea = () => {
  const [userData, setUserData] = useState<null | IUserData>(null);
  const [products, setProducts] = useState<any>([])

  const { isLoggedIn, userId, token, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {

    // Access data from localstorage
    const storageData = GetAllLocalStorage();
    const parsedData = storageData ? JSON.parse(storageData) : { login: false };

    setUserData({
      login: parsedData.login,
      userId: parsedData.userId,
      name: parsedData.userName,
      token: parsedData.token,
    });            

    const getData = async () => {
      try {

        if (!parsedData.login) {
          navigate('/login');
        }

      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error);
      }
    };

    getData();
  }, [isLoggedIn, navigate, userId, token, setIsLoggedIn]);

  useEffect(() => {
    const products = GetAllProductsLocalStorage()

    setProducts(products?.products);
  }, [setProducts])

  return (
    <Main>
      {userData && <UserName>Olá, {userData.name} </UserName>}

      <Container>
        <ContainerForm>
          <Title>Criar produtos</Title>
          <FormCreateProducts />
        </ContainerForm>

        <ContainerProducts>
        <Title>Produtos criados</Title>

        <ProductsList>
          {products.map((product: any) => (
            <CardProducts key={product.id} {...product} />
          ))}
        </ProductsList>

        </ContainerProducts>
      </Container>
    </Main>
  );
};
