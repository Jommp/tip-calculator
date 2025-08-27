import { formatCurrency } from "../helpers";

type OrderSummaryProps = {
  subTotal: number
  tipAmount: number
  orderTotal: number
}

export default function OrderSummary({ subTotal, tipAmount, orderTotal } : OrderSummaryProps) {
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
    </div>
  )
}
