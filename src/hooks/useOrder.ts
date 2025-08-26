import { useState } from "react";

import type { MenuItem, OderItem } from "../types";

export default function useOrder() {
  const [ order, setOrder ] = useState<OderItem[]>([]);

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

  return {
    order,
    addItemToOrder 
  };
}