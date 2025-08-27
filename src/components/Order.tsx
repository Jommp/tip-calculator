import type { OrderItem } from "../types";

type OrderProps = {
  order: OrderItem[]
  removeItemFromOrder: (id: OrderItem['id']) => void
}

import { formatCurrency } from "../helpers";

export default function Order({ order, removeItemFromOrder }: OrderProps) {
  return (
    <div className="space-y-3">
      {
        order.map(item => (
          <div
            key={item.id}
            className="
              flex
              justify-between
              items-center
              border-b-2
              border-gray-300
              p-4
            "
          >
            <div>
              <p className="">{item.name} - {formatCurrency(item.price)}</p>
              <p className="font-medium">
                Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className="
              bg-red-700
                h-5
                w-5
                text-xs
                rounded-xs
                text-gray-50
                cursor-pointer
              hover:bg-red-800
              active:bg-red-900
              "
              onClick={() => removeItemFromOrder(item.id)}
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  )
}
