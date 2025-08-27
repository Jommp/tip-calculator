import { useState } from "react";

import type { MenuItem, OrderItem, TipOption } from "../types";

export default function useOrder() {
  const [ order, setOrder ] = useState<OrderItem[]>([]);
  const [ tip, setTip ] = useState<TipOption['value']>(0);

  function addItemToOrder(item: MenuItem) {
    const itemIndexExists = order.findIndex(orderItem => orderItem.id === item.id);

    if (itemIndexExists < 0) {
      const newItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);

      return;
    }

    const orderUpdated = [...order];
    orderUpdated[itemIndexExists].quantity++;

    setOrder(orderUpdated);
  }

  function removeItemFromOrder(id : OrderItem['id']) {
    setOrder(order.filter(item => item.id !== id));
  }

  function handleSelectTip(value : TipOption['value']) {
    setTip(value);
  }

  return {
    order,
    addItemToOrder,
    removeItemFromOrder,
    handleSelectTip,
  };
}