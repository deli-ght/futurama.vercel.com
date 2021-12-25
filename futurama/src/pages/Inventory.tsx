import type { NextPage } from "next"
import { useData } from "../hooks/useData"
import { Inventory } from "../types"

const Inventory: NextPage = () => {
  const inventorysprops = "inventory"
  const { data, error } = useData(inventorysprops)

  if (error) return <div>ERROR</div>
  if (!data) return <div>LOADING</div>

  return (
    <main>
      <h1>{inventorysprops}</h1>
      <div>
        {data.map((inventorysprops: Inventory) => {
          return (
            <div key={inventorysprops.id}>
              <div>
                {inventorysprops.price} / {inventorysprops.stock}
              </div>
              <div>
                {inventorysprops.title} - {inventorysprops.slogan}
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Inventory
