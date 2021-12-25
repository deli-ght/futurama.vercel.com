import { SITE } from "../constants/site"
import { useData } from "../hooks/useData"
import { Error, Loading } from "./index"

interface DataName {
  dataname: string
}

function DataList({ dataname }: DataName) {
  const { data, error } = useData(dataname)

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <h1>{dataname}</h1>
      {SITE[dataname]}
    </main>
  )
}

export default DataList
