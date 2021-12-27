import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { useRef, useState } from "react"
import { COLOR } from "../../constants"
import { Questions } from "../../types"

interface Data {
  data: Array<Questions>
}

export default function QuestList({ data }: Data): JSX.Element {
  const score = useRef<number>(0)
  const showScore = useRef<boolean>(false)
  const dataLen = data.length
  const [answers, setAnswers] = useState<Array<string>>(new Array(dataLen))
  const [qnum, setQnum] = useState<number>(1)

  const Clicked = (id: number, value: string) => {
    answers[id - 1] = value
    setAnswers([...answers])
  }

  const MovePrev = () => {
    setQnum(qnum - 1)
  }

  const MoveNext = () => {
    setQnum(qnum + 1)
  }

  const GetScore = () => {
    answers.forEach((el: string, idx: number) => {
      if (data[idx].correctAnswer == el) score.current += 1
    })
    showScore.current = true
  }
  return (
    <>
      {data
        .filter((e: Questions) => e.id === qnum)
        .map((q: Questions) => {
          const { question, possibleAnswers, correctAnswer, id } = q
          return (
            <QuestContainer key={id}>
              <Qtitle>{question}</Qtitle>
              <ul>
                {possibleAnswers.map((e: string, idx: number) => {
                  return (
                    <QuestNum key={`${id}-${e}`}>
                      <Qcheck
                        type="radio"
                        value={e}
                        name={`${id}`}
                        id={`${id}-${e}`}
                        checked={answers[id - 1] == e}
                        onChange={() => Clicked(id, e)}
                      />
                      <Qlabel htmlFor={`${id}-${e}`}>{e}</Qlabel>
                    </QuestNum>
                  )
                })}
              </ul>
              {qnum > 1 && <PrevBtn onClick={MovePrev}></PrevBtn>}
              {qnum < dataLen ? (
                <NextBtn onClick={MoveNext}></NextBtn>
              ) : (
                <SubmitBtn onClick={GetScore}>finish</SubmitBtn>
              )}
            </QuestContainer>
          )
        })}
    </>
  )
}

const Qtitle = styled.h1`
  color: ${COLOR.red};
  margin-bottom: 20px;
`
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
const QuestNum = styled.div`
  margin: 10px;
`
const Qcheck = styled.input`
  margin-right: 10px;
`

const Qlabel = styled.label``

const quizBtn = () => css`
  position: absolute;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
`
const PrevBtn = styled.button`
  ${quizBtn}
  bottom:20px;
  left: 10px;
  background: ${COLOR.mint};
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -30px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid ${COLOR.mint};
    transform: rotate(-90deg);
  }
`
const NextBtn = styled.button`
  ${quizBtn}
  bottom:20px;
  right: 10px;
  background: ${COLOR.purple};
  color: white;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -30px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid ${COLOR.purple};
    transform: rotate(90deg);
  }
`
const SubmitBtn = styled.button`
  ${quizBtn}
  background: ${COLOR.red};
  color: white;
  width: 80px;
  bottom: 20px;
  right: 10px;
`
