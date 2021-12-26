import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"
import { Episodes } from "../../types"

interface Data {
  data: Array<Episodes>
}

export default function EpiList({ data }: Data): JSX.Element {
  const [epinum, setEpinum] = useState("choose epicode")
  const [show, setShow] = useState(false)

  const showSelect = () => {
    setShow(!show)
  }

  const selectEpi = (epi: string) => {
    setEpinum(epi)
    setShow(!show)
  }

  return (
    <>
      <EpiSelection>
        <EpiSelect onClick={showSelect}>{epinum}</EpiSelect>
        <EpiLists display={show}>
          {data.map((dataname: Episodes) => {
            const { number, id } = dataname
            return (
              <li key={id}>
                <Epibtn onClick={(e) => selectEpi(number)}>{number}</Epibtn>
              </li>
            )
          })}
        </EpiLists>
      </EpiSelection>
      <Episode>
        {data
          .filter((e) => e.number == epinum)
          .map((e) => {
            return (
              <article key={e.id}>
                <h2> {e.title}</h2>
                <h3>{e.writers}</h3>
                <p>{e.originalAirDate}</p>
                <p>{e.desc}</p>
              </article>
            )
          })}
      </Episode>
    </>
  )
}

const EpiSelection = styled.article`
  position: absolute;
`

const EpiSelect = styled.button`
  width: 200px;
  height: 40px;
  font-size: 20px;
  background: #34aeac;
  color: white;
  border-radius: 20px;
`
type displayProps = {
  display: boolean
}

const epiprops = (props: displayProps) => css`
  display: ${props.display ? "block" : "none"};
`
const EpiLists = styled.ul`
  ${epiprops}
  position : absolute;
  top: 50px;
  left: 0;
  padding: 0;
  width: 200px;
  height: 300px;
  overflow: auto;
  background: white;
`

const Epibtn = styled.button`
  width: 100%;
  margin-bottom: 5px;
  padding: 3px;
  background: transparent;
  font-size: 18px;
  &:hover,
  &:focus {
    background: #34aeac;
    color: white;
  }
`

const Episode = styled.article`
  display: block;
  margin: 60px;
  padding: 30px;
  background: white;
`
