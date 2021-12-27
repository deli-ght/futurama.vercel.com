import React from "react"
import { useData } from "../hooks/useData"
import { Error, Loading } from "./index"
import styled from "@emotion/styled"

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

function DataList({ dataname }: DataName): JSX.Element {
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
      <Header>{dataname}</Header>
      <FlexCenter>{SITE[dataname]}</FlexCenter>
    </main>
  )
}

export default DataList

const FlexCenter = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Header = styled.h1`
  display: inline-block;
  font-size: 72px;
  margin: 20px;
  background: -webkit-linear-gradient(
    right,
    rgba(165, 170, 218, 1) 0%,
    rgba(52, 174, 172, 1) 100%
  );
  background-clip: text;
  text-fill-color: transparent;
`
