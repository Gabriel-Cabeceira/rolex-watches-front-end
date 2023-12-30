const loginRolexWatches = {
    login: false,
}

interface ILoginRolexWatches {
    login: boolean;
    token?: string;
    userId?: string;
    userName?: string;
}

export const GetAllLocalStorage = (): string | null => {
    return localStorage.getItem('loginRolexWatches')
} 

export const createLocalStorage = ():void => {
    localStorage.setItem('loginRolexWatches', JSON.stringify(loginRolexWatches));
}

export const changeLocalStorage = (loginRolexWatches: ILoginRolexWatches): void => {
    localStorage.setItem('loginRolexWatches', JSON.stringify(loginRolexWatches));
}