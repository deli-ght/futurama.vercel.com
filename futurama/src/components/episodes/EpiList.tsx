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
  }

  return (
    <>
      <article>
        <button onClick={showSelect}>{epinum}</button>
        <ul>
          {data.map((dataname: Episodes) => {
            const { number, id } = dataname
            return (
              <li key={id}>
                <button onClick={(e) => selectEpi(number)}>{number}</button>
              </li>
            )
          })}
        </ul>
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
      </article>
    </>
  )
}
