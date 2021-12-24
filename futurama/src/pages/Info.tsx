import type { NextPage } from "next"
import { useRef } from "react"
import { useData } from "../hooks/useData"
import { Info } from "../types"

const Info: NextPage = () => {
  const infoprops = "info"
  const { data, error } = useData(infoprops)
  const Id = useRef(0)

  if (error) return <div>ERROR</div>
  if (!data) return <div>LOADING</div>

  return (
    <main>
      <h1>{infoprops}</h1>
      <div>
        {data.map((infoprops: Info) => {
          return (
            <div key={infoprops.id}>
              {infoprops.creators.map((el) => {
                return (
                  <>
                    <div key={Id.current++}>{el.name}</div>
                    <div key={Id.current++}>{el.url}</div>
                  </>
                )
              })}
              <div>{infoprops.synopsis}</div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Info
