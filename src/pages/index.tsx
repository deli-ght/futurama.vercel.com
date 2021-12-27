import styled from "@emotion/styled"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { COLOR } from "../constants"

const Home: NextPage = () => {
  return (
    <Center>
      <Image
        src="/futurama.jpeg"
        alt="futurama"
        width={350}
        height={500}
      ></Image>

      <Footer>
        This site is made by minju. check the API{" "}
        <Link href={"https://sampleapis.com/api-list/futurama"} passHref>
          <Here>here</Here>
        </Link>
      </Footer>
    </Center>
  )
}

export default Home

const Center = styled.main`
  padding: 30px;
  text-align: center;
`

const Footer = styled.footer`
  margin: 10px;
  color: ${COLOR.purple};
`
const Here = styled.a`
  color: ${COLOR.mint};
  font-weight: 700;
`
