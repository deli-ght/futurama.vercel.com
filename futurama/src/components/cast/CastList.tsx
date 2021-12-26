import styled from "@emotion/styled"
import { Cast } from "../../types"

interface Data {
  data: Array<Cast>
}

export default function CastList({ data }: Data): JSX.Element {
  return (
    <>
      {data.map((dataname: Cast) => {
        return (
          <CastContainer key={dataname.id}>
            <Name>{dataname.name} </Name>
            <div>
              {dataname.born} - {dataname.died == "" ? "alive" : dataname.died}
            </div>
            <Bio href={dataname.bio.url}>check more</Bio>
          </CastContainer>
        )
      })}
    </>
  )
}
const CastContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 400px;
  background: rgba(255, 255, 255, 0.8);
  margin: 20px;
  padding: 20px;
`

const Name = styled.h2`
  font-size: 20px;
  margin: 10px auto;
`

const Bio = styled.a`
  position: absolute;
  width: 80px;
  bottom: 10px;
  right: -10px;
  padding: 10px;
  background: #a5aada;
  border-radius: 30px;
  transform: rotate(-15deg);
  transition: transform 0.5s;
  &:hover {
    transform: rotate(0deg);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 15px;
    right: 16px;
    width: 5px;
    height: 10px;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
    transform: rotate(45deg);
  }
`
