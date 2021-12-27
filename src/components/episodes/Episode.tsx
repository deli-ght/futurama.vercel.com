import styled from "@emotion/styled"
import { Episodes } from "../../types"

interface Data {
  data: Array<Episodes>
  epinum: string
}

function Episode({ data, epinum }: Data): JSX.Element {
  return (
    <EpisodeContainer>
      {data
        .filter((e) => e.number == epinum)
        .map((e) => {
          return (
            <Epiblock key={e.id}>
              <Title> {e.title}</Title>
              <Writers>{e.writers}</Writers>
              <AirDate>{e.originalAirDate}</AirDate>
              <Desc>{e.desc}</Desc>
            </Epiblock>
          )
        })}
    </EpisodeContainer>
  )
}

export default Episode

const EpisodeContainer = styled.article`
  display: block;
  width: 80%;
  margin: 60px;
  padding: 30px;
  background: white;
`

const Epiblock = styled.article`
  position: relative;
`

const Title = styled.h2`
  margin: 10px auto;
  font-size: 32px;
  color: #34aeac;
`

const Writers = styled.h3`
  margin: 7px auto;
  padding: 5px 0;
  border-bottom: 1px solid #34aeac;
`

const Desc = styled.p`
  margin: 30px 10px;
  line-height: 24px;
  word-break: break-word;
`

const AirDate = styled.p`
  display: inline-block;
  position: absolute;
  top: -20px;
  right: -50px;
  padding: 10px;
  background: #a5aada;
`
