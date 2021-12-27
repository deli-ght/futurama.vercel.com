import styled from "@emotion/styled"
import type { NextPage } from "next"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <Center>
      <Image
        src="/futurama.jpeg"
        alt="futurama"
        width={350}
        height={500}
      ></Image>
    </Center>
  )
}

export default Home

const Center = styled.main`
  padding: 30px;
  text-align: center;
`
