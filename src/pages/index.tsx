import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <head lang="en">
        <title>futurama</title>
        <meta name="description" content="futurama test page" />
      </head>
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
            <a aria-label="check the API">
              <Here>here</Here>
            </a>
          </Link>
        </Footer>
      </Center>
    </>
  );
};

export default Home;

const Center = styled.main`
  padding: 30px;
  text-align: center;
`;

const Footer = styled.footer`
  margin: 10px;
  color: #3f479c;
`;
const Here = styled.a`
  color: #1e5756;
  font-weight: 700;
`;
