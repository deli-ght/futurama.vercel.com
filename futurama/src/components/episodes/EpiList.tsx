import styled from "@emotion/styled"
import { useState } from "react"
import { Episodes } from "../../types"

interface Data {
  data: Array<Episodes>
}

export default function EpiList({ data }: Data): JSX.Element {
  const [epinum, setEpinum] = useState("choose epicode")
  return (
    <>
      <article>
        <button>{epinum}</button>
        <ul>
          {data.map((dataname: Episodes) => {
            const { number, id } = dataname
            return <div key={id}> {number}</div>
          })}
        </ul>
      </article>
    </>
  )
}
