import { createContext, ReactNode, useState } from 'react';
import { changeLocalStorage } from '../services/localStorageLogin';
import { api, url } from '../services/api';

interface AuthContextData {
  userId: string | null;
  token: string | null;
  isLoggedIn: boolean;
  setIsLoggedIn: (login: boolean) => void
  login: (data: IFormData) => Promise<boolean>;
}

interface IFormData {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


  const login = async (data: IFormData) => {
    try {
      const response = await api.post(`${url}/login`, data);
      console.log(api, url, data)

      if (response.status === 200) {
        const userData = response.data;

        if (userData.token && userData.token.trim() !== '') {

          const secondResponse = await api.get(`${url}/user/${userData.userId}`, {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          });
          
          setIsLoggedIn(true);
          setToken(userData.token);
          setUserId(userData.userId);
          changeLocalStorage({
            login: true,
            token: userData.token,
            userId: userData.userId,
            userName: secondResponse.data.name
          });
          return true;

        } else {
          console.error('Token vazio ou inválido');
          return false;
        }
      } else {
        console.error('Erro:', response.status, response.data);

        if (response.status === 401) {
          return false;
          
        } else {
          console.error('Erro não específico. Por favor, tente novamente mais tarde.');
          return false;
        }
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      return false;
    }
  };


  return (
    <AuthContext.Provider value={{userId, token, login, isLoggedIn, setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
}
