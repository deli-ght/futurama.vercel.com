import { Characters } from "../../types"

interface Data {
  data: Array<Characters>
}

export default function CharList({ data }: Data) {
  return (
    <div>
      {data.map((dataname: Characters) => {
        return (
          <div key={dataname.id}>
            <div>
              {dataname.name.first} / {dataname.name.middle} /{" "}
              {dataname.name.last}
            </div>
            <div>
              {dataname.images["head-shot"]}
              <img src={dataname.images.main} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
