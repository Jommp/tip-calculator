import { menuItems } from "./mocks/db";

import useOrder from "./hooks/useOrder";

import MenuItem from "./components/MenuItem";
import OrderItem from "./components/OrderItem";

import "./App.css";

export default function App() {
  const { order, addItemToOrder } = useOrder();

  return (
    <>
      <header className="bg-gray-600 p-4">
        <h1 className="text-4xl font-bold text-gray-100">
          Tip Calculator
        </h1>
      </header>

      <main className="
        max-w-7xl
        mx-auto
        p-9
        grid
        md:grid-cols-2
      ">
        <section>
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

            <div className="space-y-3">
              {
                !order.length ? 
                  <p>Check empty... add items</p> :
                  order.map(item => (
                    <OrderItem
                      key={item.id}
                      item={item}
                    />
                  ))
              }
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
