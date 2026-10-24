//primero export
import { useState } from 'react';
import { allProducts } from './productosMock';
import { GetAllProducts } from './productList';
// import { allProducts } from './productosMock';

//luego const o funct etc
export function SearchProduct({ products }) {
  //------------------------------- propts
  //searchBox
  const [name, setName] = useState('');
  const productoE = products.filter((producto) =>
    producto.nombre.includes(name)
  );
  const ordenarP = allProducts.sort((a, b) => {
    // Extraemos y limpiamos el número del id de cada objeto, replace remplaza P por vacio para dejar solo el numero
    const idNumA = Number(a.id.replace('p', ''));
    const idNumB = Number(b.id.replace('p', ''));

    // al final se hizo el cambio a number investigando parseint funciona con caracteres al inicio, por tanto no estaba haciendo nada
    return idNumB - idNumA;
  });
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
