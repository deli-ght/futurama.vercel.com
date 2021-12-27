import styled from "@emotion/styled"
import { Info } from "../../types"
import Link from "next/link"

interface Data {
  data: Array<Info>
}

export default function InfoList({ data }: Data): JSX.Element {
  const infodata = data[0]
  const { creators, synopsis, yearsAired, id } = infodata

  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QRk1s5Kf3aQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Infomation>
        <Creators>
          Made by.
          {creators.map((e: { name: string; url: string }) => {
            return (
              <Link key={id} href={e.url} passHref>
                <NameLink>{e.name}</NameLink>
              </Link>
            )
          })}
        </Creators>
        <YearAired>{yearsAired}</YearAired>
        <Synopsis>{synopsis}</Synopsis>
      </Infomation>
    </>
  )
}

const Infomation = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Creators = styled.div`
  margin: 10px;
  font-size: 32px;
  font-weight: 600;
`

const NameLink = styled.a`
  margin-left: 10px;
  &: hover {
    color: #34aeac;
  }
`

const YearAired = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  border-bottom: 1px solid #a5aada;
  font-weight: 600;
`

const Synopsis = styled.p`
  padding: 30px;
  line-height: 20px;
`
