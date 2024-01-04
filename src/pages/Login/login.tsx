import { useContext, useState } from 'react';
import { Button, ContainerLogin, Divisor, FormLogin, Input, Message, RolexLogo, SignOnButton } from './login.styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { GetAllProductsLocalStorage, createProductsLocalStorage } from '../../services/localStorageProducts';
import { Link } from 'react-router-dom';
import { GetAllCartLocalStorage, createCartLocalStorage } from '../../services/localStorageCart';


export interface FormData {
    email: string;
    password: string;
}

export const Login = () => {

    const productStorage = GetAllProductsLocalStorage();

    const cartStorage = GetAllCartLocalStorage();

    if(!productStorage) {
        createProductsLocalStorage();
    }

    if(!cartStorage) {
        createCartLocalStorage();
    }

    const [invalidData, setInvalidData] = useState<boolean>(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data: any) => {
        try {
            // Function login from context
            const loginResult = await login(data);

            if(loginResult === false) {
                setInvalidData(true);
            } else {
                navigate('/restrict');
            }

        } catch (error) {
            console.error('Erro no login:', error);
            setInvalidData(true);
        }
    };

    return (
        <ContainerLogin>
            <RolexLogo src='https://freepngimg.com/thumb/rolex/28202-3-rolex-logo-clipart.png' />
            <FormLogin onSubmit={handleSubmit(onSubmit)}>
                {invalidData ? (<Message>Email ou Senha incorretos</Message>) : null}
                <Input placeholder='E-mail' type='email' {...register('email')} />
                <Input placeholder='Senha' type='password' {...register('password')} />
                <Divisor>
                    <Button type='submit'>Entrar</Button>
                    <Button type='reset'>Limpar</Button>
                </Divisor>
                <Link to={'/signOn'}>
                    <SignOnButton>Criar conta</SignOnButton>
                </Link>
            </FormLogin>
        </ContainerLogin>
    );
};
