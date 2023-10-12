/* eslint-disable react/prop-types */
/**
Componente de lista de pedidos: Este componente muestra los detalles de un pedido, como la dirección, la ciudad, la cantidad, los artículos y la fecha de creación. Los datos del pedido se pasan como propiedades al componente. El componente también formatea la fecha de creación en el formato "dd-mm-yyyy". Los detalles del pedido se muestran en una lista ordenada, con cada artículo mostrando su nombre y cantidad. El componente también muestra el monto total del pedido y la fecha de creación.
 */
const OrderList = props => {

  const { address, city, amount, items, createdAt } = props.order;

  const date = new Date( createdAt );

  const formatDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  return (
    <li className="p-2 bg-white border-b border-primary">
      <p className="mb-0 text-sm text-stone-800">
        <strong>Address</strong> : { address }
      </p>
      <p className="mb-0 text-sm text-stone-800">
        <strong>City</strong> : { city }
      </p>
      <p className="mb-0 text-sm text-stone-800">
        <strong>List of beers</strong> :{" "}
      </p>
      <ul className="ml-5 text-sm">
        {items.map(( item ) => (
          <li key={ `item-${item.id}` }>
            { item.name } (x { item.quant })
          </li>
        ))}
      </ul>
      <p className="mb-0 text-sm text-red-800">
        <strong>Amount</strong> : { amount }
      </p>
      <p className="mb-0 text-sm text-stone-800">
        <strong>{ formatDate }</strong>{ " " }
      </p>
    </li>
  );
}

export default OrderList;