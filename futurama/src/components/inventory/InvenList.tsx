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
        return (
          <div key={id}>
            <h1>{title}</h1>
            <h2>{slogan}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <span>${price}</span>
            <span>{stock}</span>
          </div>
        )
      })}
    </>
  )
}
