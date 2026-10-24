//primero export
import { useState } from 'react';
import { allProducts } from './productosMock';
import { GetAllProducts } from './productList';
// import { allProducts } from './productosMock';

//luego const o funct etc
export function SearchProduct({ products }) {
  //------------------------------- propts
  const [name, setName] = useState('');
  const productoE = products.filter((producto) =>
    producto.nombre.includes(name)
  );
  const ordenarP = allProducts.sort((a, b) => +b.id - +a.id);
  // agregar la parte de lowercase
  //Segunda practica usar sort para acomodar por ID
  // ESTADO QUE QUIERE MODIFICAR, HANDLER Y COMO QUEREMOS INICIALIZAR
  return (
    <>
      <label>Ingresa tu producto</label>
      <input
        id="SearchProduct"
        onChange={(evt) => setName(evt.target.value)}
        type="text"
      />
      <GetAllProducts products={productoE} />
    </>
  );
}
