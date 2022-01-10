import styled from "@emotion/styled"
import { useRef, useState } from "react"
import { COLOR } from "../../constants"
import { Questions } from "../../types"
import QuestQna from "./QuestQna"

interface Data {
  data: Array<Questions>
}

export default function QuestList({ data }: Data): JSX.Element {
  const score = useRef<number>(0)
  const [showScore, setShowScore] = useState<boolean>(true)
  const dataLen = data.length
  const [answers, setAnswers] = useState<Array<string>>(
    new Array(dataLen).fill("")
  )
  const [qnum, setQnum] = useState<number>(1)

  const Clicked = (id: number, value: string) => {
    answers[id - 1] = value
    setAnswers([...answers])
  }

  const MovePrev = () => {
    setQnum(qnum - 1)
  }

  const MoveNext = (id: number) => {
    if (answers[id - 1] != "") {
      setQnum(qnum + 1)
    } else {
      alert("답을 선택해주세요 :(")
    }
  }

  const GetScore = () => {
    answers.forEach((el: string, idx: number) => {
      if (data[idx].correctAnswer == el) score.current += 1
    })
    setShowScore(false)
  }
  return (
    <QuestContainer>
      {showScore ? (
        <QuestQna
          data={data}
          qnum={qnum}
          datalen={dataLen}
          answers={answers}
          click={Clicked}
          prev={MovePrev}
          next={MoveNext}
          score={GetScore}
        />
      ) : (
        <Result>
          total score : {score.current} / {dataLen}
        </Result>
      )}
    </QuestContainer>
  )
}
const QuestContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 90%;
  padding: 50px;
  background: #ffffff;
  margin: 20px;
  border: 1px solid ${COLOR.purple};
  border-radius: 30px;
`
const Result = styled.h1`
  text-align: center;
  color: ${COLOR.red};
`
