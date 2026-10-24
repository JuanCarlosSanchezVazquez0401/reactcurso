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
