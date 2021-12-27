import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useRef, useState } from "react"
import { Inventory } from "../../types"
import { COLOR } from "../../constants"
interface Data {
  data: Array<Inventory>
}

export default function InvenList({ data }: Data): JSX.Element {
  const kinds = [
    "Pest Control",
    "Misc",
    "Food",
    "Publications",
    "App",
    "Toys",
    "Health",
  ]
  const [kind, setKind] = useState("all")
  const chooseKind = (el: string) => {
    if (el == "all") setKind("all")
    else setKind(el)
  }
  return (
    <>
      <ul>
        <KindLi>
          <KindBtn
            name={"all" === kind ? COLOR.red : "black"}
            onClick={() => chooseKind("all")}
          >
            All
          </KindBtn>
        </KindLi>
        {kinds.map((el: string, idx: number) => {
          return (
            <KindLi key={idx}>
              <KindBtn
                name={el === kind ? COLOR.red : "black"}
                onClick={() => chooseKind(el)}
              >
                {el}
              </KindBtn>
            </KindLi>
          )
        })}
      </ul>
      {data
        .filter((inven: Inventory) => {
          if (kind == "all") return true
          else return inven.category == kind
        })
        .map((inven: Inventory) => {
          const { title, category, description, price, slogan, stock, id } =
            inven
          return (
            <InvenContainer key={id}>
              <Title>{title}</Title>
              <Slogan>{slogan && `"${slogan}"`}</Slogan>
              <h3>{category}</h3>
              <Desc>{description}</Desc>
              <InvenDl>
                <InvenTitle>PRICE : </InvenTitle>
                <dd>${price}</dd>
                <InvenTitle>STOCK : </InvenTitle>
                <dd>{stock}</dd>
              </InvenDl>
            </InvenContainer>
          )
        })}
    </>
  )
}

const InvenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 50px;
  background: #ffffff;
  margin: 20px;
  border: 1px solid ${COLOR.purple};
  border-radius: 30px;
  box-shadow: 5px 5px 0 2px ${COLOR.purple};
`

const Title = styled.h1`
  font-size: 32px;
  color: ${COLOR.red};
`
const Slogan = styled.h2`
  font-style: italic;
  margin: 10px 0;
  color: ${COLOR.mint};
`

const KindLi = styled.li`
  display: inline-block;
  width: 100px;
  margin: 10px;
`

type kindbtn = {
  name: string
}

const btnname = (props: kindbtn) => css`
  color: ${props.name}};
`

const KindBtn = styled.button`
  width: 100%;
  height: 30px;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  ${btnname}
`

const Desc = styled.p`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${COLOR.purple};
`

const InvenDl = styled.dl`
  display: flex;
  width: 50%;
  justify-content: space-around;
`
const InvenTitle = styled.dt`
  display: inline-block;
  font-weight: 600;
  color: ${COLOR.red};
`

const InvenData = styled.dd`
  display: inline-block;
  margin-right: 10px;
`
