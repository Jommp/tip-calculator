import { tipOptions } from "../mocks/db"

import type { TipOption } from "../types"

type TipFormProps = {
  tip: TipOption['value']
  handleSelectTip: (value : TipOption['value']) => void
}

export default function TipForm({ tip, handleSelectTip } : TipFormProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-2">
        Tip
      </h3>

      <form className="flex flex-col justify-between space-y-1">
        {
          tipOptions.map(option => (
            <div key={option.id}>
              <label htmlFor={option.id}>{option.label}</label>
              <input
                type="radio"
                id={option.id}
                name="tips"
                value={option.value}
                className="ml-2"
                checked={tip === option.value}
                onChange={() => handleSelectTip(option.value)}
              />
            </div>
          ))
        }
      </form>
    </div>
  )
}
