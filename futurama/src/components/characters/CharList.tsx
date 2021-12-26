import styled from "@emotion/styled"
import { Characters } from "../../types"

interface Data {
  data: Array<Characters>
}

export default function CharList({ data }: Data): JSX.Element {
  return (
    <>
      {data.map((dataname: Characters) => {
        return (
          <CharContainer key={dataname.id}>
            <MainContainer>
              <CharImage src={dataname.images.main} />
              <Name>
                {dataname.name.first} {dataname.name.middle}{" "}
                {dataname.name.last}
              </Name>
            </MainContainer>
            <DetailContainer>
              <Sayings>{dataname.sayings[0]}</Sayings>

              <Details>Age :{dataname.age || "Unknown"}</Details>
              <Details>Gender :{dataname.gender || "Unknown"}</Details>
              <Details>Home Planet :{dataname.homePlanet || "Unknown"}</Details>
              <Details>Occupation :{dataname.occupation || "Unknown"}</Details>
            </DetailContainer>
          </CharContainer>
        )
      })}
    </>
  )
}

const CharContainer = styled.article`
  display: flex;
  width: 90%;
  padding: 50px;
  background: #ffffff;
  margin: 20px;
  border: 1px solid #a5aada;
  border-radius: 30px;
  box-shadow: 5px 5px 0 2px #a5aada;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`
const CharImage = styled.img`
  width: 150px;
`
const DetailContainer = styled.div`
  margin: 20px;
`
const Sayings = styled.h2`
  color: #aa1631;
  font-size: 32px;
  margin: 0;
  word-break: break-word;
`

const Name = styled.div`
  display: block;
  text-align: right;
  font-size: 20px;
  width: 200px;
  padding: 10px;
  margin: 10px auto;
  background: #34aeac;
  color: #ffffff;
  font-weight: 700;
`
const Details = styled.div`
  margin: 10px auto;
`
