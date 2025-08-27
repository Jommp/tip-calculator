import type { OderItem } from "../types";

type OrderItemProps = {
  item: OderItem
}

export default function OrderItem({ item } : OrderItemProps) {
  return (
    <>
      <div
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
          <p className="">{ item.name } - ${ item.price }</p>
          <p className="font-medium">
            Quantity: {item.quantity} - ${ item.price * item.quantity }
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
        >
          X
        </button>
      </div>
    </>
  )
}