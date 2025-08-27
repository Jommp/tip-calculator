import { menuItems } from "./mocks/db";

import useOrder from "./hooks/useOrder";

import MenuItem from "./components/MenuItem";
import Order from "./components/Order";
import TipForm from "./components/TipForm";
import OrderSummary from "./components/OrderSummary";

import "./App.css";

export default function App() {
  const {
    order,
    tip,
    addItemToOrder,
    removeItemFromOrder,
    handleSelectTip,
    subTotal,
    tipAmount,
    orderTotal,
    handleSaveOrder,
  } = useOrder();

  return (
    <>
      <header className="bg-gray-600 p-4">
        <h1 className="text-4xl font-bold text-gray-100">
          Tip Calculator
        </h1>
      </header>

      <main className="
        bg-gray-100
        w-full
        mx-auto
        p-9
        grow
        shrink
        grid
        md:grid-cols-2
        md:max-w-7xl
      ">
        <section className="mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Menu
          </h2>

          <div className="p-2 space-y-3">
            {
              menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                  addItemToOrder={addItemToOrder}
                />
              ))
            }
          </div>
        </section>

        <section>
          <div 
            className="
              border-1
              border-dashed
              rounded-lg
              border-gray-900
              p-5
              min-h-full
            "
          >
            <h2
              className="
                text-3xl
                font-bold
                pb-4
                border-b-2
              border-gray-300
              "                                                   
            >
              Check
            </h2>

            {
              !order.length ?
                <p className="text-center mt-4">Check empty... add items</p> :
                <div className="space-y-4">
                  <Order
                    order={order}
                    removeItemFromOrder={removeItemFromOrder}
                  />

                  <TipForm
                    tip={tip}
                    handleSelectTip={handleSelectTip}
                  />

                  <OrderSummary
                    subTotal={subTotal}
                    tipAmount={tipAmount}
                    orderTotal={orderTotal}
                    handleSaveOrder={handleSaveOrder}
                  />
                </div>
            }
          </div>
        </section>
      </main>

      <footer
        className="
          w-full
          p-10 
          bg-gray-950
        "
      >
        <p className="text-gray-50 text-center">
          Created with: Vite + React + TS + ♡
        </p>
      </footer>
    </>
  )
}
