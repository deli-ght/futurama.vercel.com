import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useState } from "react"
import { Inventory } from "../../types"

interface Data {
  data: Array<Inventory>
}

export default function InvenList({ data }: Data): JSX.Element {
  return (
    <>
      {data.map((inven: Inventory) => {
        const { title, category, description, price, slogan, stock, id } = inven
        return <h1>{inven.title}</h1>
      })}
    </>
  )
}
