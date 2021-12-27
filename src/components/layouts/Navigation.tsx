import Link from "next/link"
import { ROUTES } from "../../constants"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface ROUTE {
  ID: number
  PATH: string
  LABEL: string
}

export const Navigation = () => {
  return (
    <Title>
      <Link href={"/"} passHref>
        <LogoImg background={"/symbol.png"} />
      </Link>
      <nav>
        <Navlists>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <Navlist key={routeObject.ID}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </Navlist>
            )
          })}
        </Navlists>
      </nav>
    </Title>
  )
}

const Title = styled.div`
  text-align: center;
`
type logo = {
  background: string
}

const logoimg = (props: logo) => css`
  background-image: url(${props.background});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`

const LogoImg = styled.a`
  ${logoimg}
  display: inline-block;
  width: 160px;
  height: 100px;
`
const Navlists = styled.ul`
  margin: 10px;
`

const Navlist = styled.li`
  display: inline-block;
  width: 100px;
  & + & {
    margin-left: 10px;
  }
`
