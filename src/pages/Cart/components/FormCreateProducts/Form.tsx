import { useState } from 'react';
import { Form, TextInput, FileInput, Divisor, Button, Label } from './form.styles';
import { addProductToLocalStorage } from '../../../../services/localStorageProducts';
import { randomUUID } from 'crypto';

export const FormCreateProducts = () => {
  const initialProductData = {
    productName: '',
    description: '',
    price: '',
    image: null as null,
    imagePreview: '',
  };

  const [productData, setProductData] = useState(initialProductData);


  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event && event.target) {
          const base64Image = event.target.result as string;
          setProductData({
            ...productData,
            image: file,
            imagePreview: base64Image,
          });
        }
      };

      reader.readAsDataURL(file);
    }
  };


  const handleReset = () => {
    setProductData(initialProductData);
  };

  
  function randomId() {
    return Math.floor(Math.random() * 1000000);
  }
  const id = randomId();


  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Construct object product
    const newProduct = {
      id: id,
      productName: productData.productName,
      description: productData.description,
      price: parseFloat(productData.price),
      image: productData.imagePreview,
    };

    // Add product to localstorage
    setProductData(initialProductData);
    addProductToLocalStorage(newProduct);

    handleReset();

  };


  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
        <TextInput
            placeholder='Nome do produto'
            type='text'
            name='productName'
            value={productData.productName}
            onChange={handleInputChange}
        />

        <TextInput
            placeholder='Descrição do produto'
            type='text'
            name='description'
            value={productData.description}
            onChange={handleInputChange}
        />

        <TextInput
            placeholder='Preço'
            type='number'
            name='price'
            value={productData.price}
            onChange={handleInputChange}
        />

        <Label>
            Escolha um arquivo..
            <FileInput
                placeholder='Imagem do produto'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
            />

            {productData.imagePreview && (
                <img src={productData.imagePreview} alt='Preview' style={{ maxWidth: '100px' }} />
            )}
        </Label>


      <Divisor>
        <Button type='submit'>Enviar</Button>
        <Button type='reset'>Limpar</Button>
      </Divisor>
    </Form>
  );
};
