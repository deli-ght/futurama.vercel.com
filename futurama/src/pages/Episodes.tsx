import type { NextPage } from "next"
import DataList from "../components/DataList"

const Episodes: NextPage = () => {
  const episodesprops = "episodes"

  return <DataList dataname={episodesprops}></DataList>
}

export default Episodes
