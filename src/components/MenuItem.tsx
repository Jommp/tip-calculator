import type { MenuItem } from '../types';

type MenuItemProps = {
  item: MenuItem
  addItemToOrder: (item: MenuItem) => void
}

export default function MenuItem({ item, addItemToOrder } : MenuItemProps) {
  return (
    <>
      <button
        className='
          w-full
          flex
          justify-between
          p-1
          border-2
          border-gray-600
          rounded-sm
          cursor-pointer
          hover:bg-gray-200
          active:bg-gray-300
        '
        onClick={() => addItemToOrder(item)}
      >
        <p className='text-gray-600 font-medium'>{ item.name }</p>
        <p className='text-yellow-600 font-bold'>${ item.price }</p>
      </button>
    </>
  )
}
