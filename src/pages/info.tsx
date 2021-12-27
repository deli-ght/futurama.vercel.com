import type { NextPage } from "next"
import DataList from "../components/DataList"

const Info: NextPage = () => {
  const infoprops = "info"

  return <DataList dataname={infoprops}></DataList>
}

export default Info
