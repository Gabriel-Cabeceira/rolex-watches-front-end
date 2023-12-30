interface IProduct {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
  }
  
  interface IProductsRolexWatches {
    products: IProduct[];
  }
  
  export const GetAllLocalStorage = (): IProductsRolexWatches | null => {
    const storedData = localStorage.getItem('productsRolexWatches');
    return storedData ? JSON.parse(storedData) : null;
  };
  
  export const createLocalStorage = (): void => {
    const initialData: IProductsRolexWatches = {
        products: [],
    };
    localStorage.setItem('productsRolexWatches', JSON.stringify(initialData));
  };
  
  export const addProductToLocalStorage = (newProduct: IProduct): void => {
    const storedData = GetAllLocalStorage();
    if (storedData) {
        storedData.products.push(newProduct);
        changeLocalStorage(storedData);
    }
  };
  
  export const changeLocalStorage = (data: IProductsRolexWatches): void => {
    localStorage.setItem('productsRolexWatches', JSON.stringify(data));
  };
  
