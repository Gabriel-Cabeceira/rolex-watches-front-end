// import { useContext, useEffect, useState } from 'react';
import { Container, Main, ContainerForm, ContainerProducts, Title, ProductsList } from './cart.styles';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../contexts/AuthContext';
// import { GetAllLocalStorage } from '../../services/localStorageLogin';
// import { GetAllLocalStorage as GetProductsLocalStorage } from '../../services/localStorageProducts';
// import { FormCreateProducts } from './components/FormCreateProducts/Form';
// import { CardProducts } from './components/CardProducts/cardProducts';


// interface IUserData {
//   login: boolean;
//   userId: string;
//   name: string;
//   token: string;
// }

export const Cart = () => {
  // const [userData, setUserData] = useState<null | IUserData>(null);
  // const [products, setProducts] = useState<any>([])

  // const { isLoggedIn, userId, token, setIsLoggedIn } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {

  //   // Access data from localstorage
  //   const storageData = GetAllLocalStorage();
  //   const parsedData = storageData ? JSON.parse(storageData) : { login: false };

  // //   setUserData({
  // //     login: parsedData.login,
  // //     userId: parsedData.userId,
  // //     name: parsedData.userName,
  // //     token: parsedData.token,
  // //   });            

  // //   const getData = async () => {
  // //     try {

  // //       if (!parsedData.login) {
  // //         navigate('/login');
  // //       }

  // //     } catch (error) {
  // //       console.error('Erro ao obter dados do usuário:', error);
  // //     }
  // //   };

  // //   getData();
  // // }, [isLoggedIn, navigate, userId, token, setIsLoggedIn]);

  // // useEffect(() => {
  // //   const products = GetProductsLocalStorage()

  // //   setProducts(products?.products);
  // // }, [setProducts])

  return (
    <Main>
      <Container>
        <ContainerForm>
          <Title>Carrinho</Title>
          <h1>Página em desenvolvimento</h1>
        </ContainerForm>

        <ContainerProducts>
        <Title>Finalizar Compra</Title>

        <ProductsList>

        </ProductsList>

        </ContainerProducts>
      </Container>
    </Main>
  );
};
