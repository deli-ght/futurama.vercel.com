import type { NextPage } from "next"
import DataList from "../components/DataList"

const Inventory: NextPage = () => {
  const inventoryprops = "inventory"

  return <DataList dataname={inventoryprops}></DataList>
}

export default Inventory
