import type { NextPage } from "next"
import DataList from "../components/DataList"

const Cast: NextPage = () => {
  const castprops = "cast"

  return <DataList dataname={castprops}></DataList>
}

export default Cast
