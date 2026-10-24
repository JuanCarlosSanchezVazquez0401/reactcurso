export function ProductItem({ id, producto, precio, stock, categoria }) {
  return (
    // <p>
    //   {id} {producto} {precio}
    // </p>
    // recordatorio no agregar table por que se rompe y lo agrega a un solo th
    <tr>
      <td>{id}</td>
      <td>{producto}</td>
      <td>{precio}</td>
      <td>{stock}</td>
      <td>{categoria}</td>
    </tr>
  );
}
