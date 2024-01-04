interface IProduct {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
  }
    
  interface IProductsRolexWatches {
    cart: IProduct[];
  }
    
  export const GetAllCartLocalStorage = (): IProductsRolexWatches | null => {
    const storedData = localStorage.getItem('cartRolexWatches');
    return storedData ? JSON.parse(storedData) : null;
  };
   
  export const createCartLocalStorage = (): void => {
    const initialData: IProductsRolexWatches = {
        cart: [],
    };
    localStorage.setItem('cartRolexWatches', JSON.stringify(initialData));
  };
    
    
  export const addProductToCartLocalStorage = (newProduct: IProduct): void => {
    const storedData = GetAllCartLocalStorage();
    if (storedData) {
      storedData.cart.push(newProduct);
      changeCartLocalStorage(storedData);
    }
  };
    
  export const changeCartLocalStorage = (data: IProductsRolexWatches): void => {
    localStorage.setItem('cartRolexWatches', JSON.stringify(data));
  };
    
  