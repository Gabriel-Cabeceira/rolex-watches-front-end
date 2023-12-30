import {  useState } from 'react';
import { Button, ContainerLogin, Divisor, FormLogin, Input, AlertMessage, PositiveMessage, RolexLogo } from './signOn.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GetAllLocalStorage, createLocalStorage } from '../../services/localStorageProducts';
import { api, url } from '../../services/api';

interface FormData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const SignOn = () => {
  const productStorage = GetAllLocalStorage();

  if (!productStorage) {
    createLocalStorage();
  }

  const [invalidData, setInvalidData] = useState<boolean>(false);
  const [incorrectPassword, setIncorrectPassword] = useState<boolean>(false);
  const [userCreated, setUserCreated] = useState<boolean>(false)
  const { register, handleSubmit } = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = async (data: any) => {

    if (data.password !== data.confirmPassword) {
        setIncorrectPassword(true);
    } else {
        try {
            const requestBody = {
                name: data.name,
                email: data.email,
                password: data.password
            }

            const response = await api.post(`${url}/user`, requestBody);
        
            if (response.status === 201) {
                setInvalidData(false);
                setUserCreated(true);
            } else {
                setInvalidData(true);
            }
        } catch (error) {
              console.error('Erro na solicitação:', error);
              return false;
            }
    }
  };

  return (
    <ContainerLogin>
      <RolexLogo src='https://freepngimg.com/thumb/rolex/28202-3-rolex-logo-clipart.png' />
      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        {invalidData ? <AlertMessage>Todos os campos são obrigatórios</AlertMessage> : null}
        {incorrectPassword ? <AlertMessage>A senha não coincide</AlertMessage> : null}
        {userCreated ? <PositiveMessage>Usuário criado com sucesso!</PositiveMessage> : null}
        <Input placeholder='E-mail' type='email' {...register('email')} />
        <Input placeholder='Nome' type='text' {...register('name')} />
        <Input placeholder='Senha' type='password' {...register('password')} />
        <Input placeholder='Senha' type='password' {...register('confirmPassword')} />

        <Divisor>
          <Button type='submit' disabled={userCreated}>Criar</Button>
          <Button type='reset'>Limpar</Button>
        </Divisor>
      </FormLogin>
    </ContainerLogin>
  );
};
