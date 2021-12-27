import type { NextPage } from "next"
import DataList from "../components/DataList"

const Character: NextPage = () => {
  const charactersprops = "characters"

  return <DataList dataname={charactersprops}></DataList>
}

export default Character
