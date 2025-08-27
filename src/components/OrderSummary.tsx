import { formatCurrency } from "../helpers";

type OrderSummaryProps = {
  subTotal: number
  tipAmount: number
  orderTotal: number
  handleSaveOrder: () => void
}

export default function OrderSummary({
  subTotal,
  tipAmount,
  orderTotal,
  handleSaveOrder
} : OrderSummaryProps) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-0.5">Summary</h3>

      <p className="w-3/5 flex justify-between">
        Subtotal: <span className="font-medium">{formatCurrency(subTotal)}</span>
      </p>

      <p className="w-3/5 flex justify-between">
        Tip: <span className="font-medium">{formatCurrency(tipAmount)}</span>
      </p>

      <p className="w-3/5 flex justify-between">
        Total: <span className="font-bold">{formatCurrency(orderTotal)}</span>
      </p>

      <button
        className="
          w-full
          mt-10
          p-2
          font-bold
          bg-gray-700
          text-gray-50
          cursor-pointer
          hover:bg-gray-800
          active:bg-gray-900
        "
        onClick={handleSaveOrder}
      >
        Save Order
      </button>
    </div>
  )
}
