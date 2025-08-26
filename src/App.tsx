import { menuItems } from './mocks/db';

import MenuItem from './components/MenuItem';

import './App.css';

export default function App() {
  return (
    <>
      <header className='bg-gray-600 p-4'>
        <h1 className='text-4xl font-bold text-gray-100'>
          Tip Calculator
        </h1>
      </header>

      <main className='
        max-w-7xl
        mx-auto
        p-9
        grid
        md:grid-cols-2
      '>
        <section>
          <h2 className='text-3xl font-bold mb-4'>
            Menu
          </h2>

          <div className='p-2 space-y-3'>
            {
              menuItems.map(item => (
                <MenuItem 
                  key={item.id}
                  item={item}
                />
              ))
            }
          </div>
        </section>

        <section>
          <h2 className='text-3xl font-bold'>
            Check
          </h2>
        </section>
      </main>
    </>
  )
}
