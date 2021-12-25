import { useData } from "../hooks/useData"
import { Error, Loading } from "./index"

import CastList from "../components/cast/CastList"
import CharList from "../components/characters/CharList"
import EpiList from "../components/episodes/EpiList"
import InfoList from "../components/info/InfoList"
import InvenList from "../components/inventory/InvenList"
import QuestList from "../components/questions/QuestList"

type SiteType = {
  [key: string]: JSX.Element
}

interface DataName {
  dataname: string
}

function DataList({ dataname }: DataName) {
  const { data, error } = useData(dataname)

  if (error) return <Error />
  if (!data) return <Loading />

  const SITE: SiteType = {
    cast: <CastList data={data} />,
    characters: <CharList data={data} />,
    episodes: <EpiList data={data} />,
    info: <InfoList data={data} />,
    inventory: <InvenList data={data} />,
    questions: <QuestList data={data} />,
  }

  return (
    <main>
      <h1>{dataname}</h1>
      {SITE[dataname]}
    </main>
  )
}

export default DataList
