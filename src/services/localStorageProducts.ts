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
  
export const GetAllProductsLocalStorage = (): IProductsRolexWatches | null => {
  const storedData = localStorage.getItem('productsRolexWatches');
  return storedData ? JSON.parse(storedData) : null;
};
 
export const createProductsLocalStorage = (): void => {
  const initialData: IProductsRolexWatches = {
    products: [],
  };
  localStorage.setItem('productsRolexWatches', JSON.stringify(initialData));
};
  
  
export const addProductToLocalStorage = (newProduct: IProduct): void => {
  const storedData = GetAllProductsLocalStorage();
  if (storedData) {
    storedData.products.push(newProduct);
    changeProductsLocalStorage(storedData);
  }
};
  
export const changeProductsLocalStorage = (data: IProductsRolexWatches): void => {
  localStorage.setItem('productsRolexWatches', JSON.stringify(data));
};
  
