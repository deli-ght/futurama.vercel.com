import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Info } from "../../types"
import Link from "next/link"

interface Data {
  data: Array<Info>
}

export default function InfoList({ data }: Data): JSX.Element {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QRk1s5Kf3aQ?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Infomation>
        {data.map((infodata: Info) => {
          const { creators, synopsis, yearsAired, id } = infodata
          return (
            <>
              <Creators>
                Made by.
                {creators.map((e) => {
                  return (
                    <Link key={id} href={e.url} passHref>
                      <NameLink>{e.name}</NameLink>
                    </Link>
                  )
                })}
              </Creators>
              <YearAired>{yearsAired}</YearAired>
              <Synopsis>{synopsis}</Synopsis>
            </>
          )
        })}
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
  width: 200px;
  text-align: center;
  background: rgba(165, 170, 218, 1);
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  font-weight: 600;
`

const Synopsis = styled.p`
  padding: 30px;
  line-height: 20px;
`
