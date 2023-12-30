import { useState, useEffect, useContext } from 'react';
import { ContainerCarrossel, ContainerNav, ContentExpandedNav, ListItem, NavListItens, OptionsHeader, RolexLogo, StyledHeader } from './header.styles';
import { BsCart3, BsBoxArrowInRight } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { BiHomeAlt2 } from "react-icons/bi";
import { ButtonMenu } from './components/Button/button';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { GetAllLocalStorage, changeLocalStorage } from '../../../services/localStorageLogin';

export const Header = () => {

  const [navHeight, setNavHeight] = useState<string>('2em');
  const [active, setActive] = useState<boolean>(false);

  const { setIsLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
    
  useEffect(() => {
    setNavHeight(active ? '95vh' : '2em');
    document.body.style.overflow = active ? 'hidden' : 'visible';
  }, [active]);


  const storageData = GetAllLocalStorage();
  const parsedData = storageData ? JSON.parse(storageData) : { login: false };


  const logout = () => {
    // clear localstorage
    changeLocalStorage({login: false});

    setIsLoggedIn(false);

    navigate('/login');
  };



  return (
    <StyledHeader style={{ height: navHeight }}>

      <ContainerNav>

        <ButtonMenu onClick={() => setActive(!active)} />

        <RolexLogo src="https://freepngimg.com/thumb/rolex/28202-3-rolex-logo-clipart.png" alt="Rolex Logo" />

        <NavListItens>
          {
            !active ? (
              <>
                <ListItem onClick={() => navigate('/')}>
                  <BiHomeAlt2 />
                  <span>Home</span>
                </ListItem>
      
                <ListItem onClick={() => navigate('/cart')}>
                  <BsCart3 />  
                  <span>Carrinho</span>
                </ListItem>
      
                {
                  !parsedData.login ? (
                    <ListItem onClick={() => navigate('/login')}>
                      <BsBoxArrowInRight />
                      <span>Login</span>
                    </ListItem>
                  ): (
                    <>
                      <ListItem onClick={() => navigate('/restrict')}>
                        <RiAdminLine />
                        <span>Admin</span>
                      </ListItem>

                      <ListItem onClick={() => logout()}>
                        <IoIosLogOut />
                        <span>Logout</span>
                      </ListItem>
                    
                    </>
                  )
                }
              </>
            ): 
            null
          }

        </NavListItens>

      </ContainerNav>
      {
        active ? (
          <ContentExpandedNav>

            <OptionsHeader>
              <p>Relógios Rolex</p>
              <p>A arte da relojoaria</p>
              <p>Sobre a Rolex</p>
              <p>A Rolex e os esportes</p>
              <p>Iniciativas Perpetual</p>
              <p>A compra de um rolex</p>
              <p>Cuidado e manutenção</p>
            </OptionsHeader>

            <ContainerCarrossel>
              <h1>Relógios Rolex</h1>
            </ContainerCarrossel>

          </ContentExpandedNav>
        ): 
        null
      }

    </StyledHeader>
  );
};
