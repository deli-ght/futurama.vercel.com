import type { NextPage } from "next"
import { useRef } from "react"
import { useData } from "../hooks/useData"
import { Characters } from "../types"

const Character: NextPage = () => {
  const charactersprops = "characters"
  const { data, error } = useData(charactersprops)
  const Id = useRef(0)

  if (error) return <div>ERROR</div>
  if (!data) return <div>LOADING</div>

  return (
    <main>
      <h1>{charactersprops}</h1>
      <div>
        {data.map((charactersprops: Characters) => {
          return (
            <div key={charactersprops.id}>
              <div>
                {charactersprops.name.first} / {charactersprops.name.middle} /{" "}
                {charactersprops.name.last}
              </div>
              <div>
                {charactersprops.images["head-shot"]}
                <img src={charactersprops.images.main} />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Character
