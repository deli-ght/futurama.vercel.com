import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { COLOR } from "../../constants"
import { Questions } from "../../types"

interface Data {
  data: Array<Questions>
  qnum: number
  datalen: number
  answers: Array<string>
  click: (id: number, value: string) => void
  prev: () => void
  next: () => void
  score: () => void
}

export default function QuestQna({
  data,
  qnum,
  datalen,
  answers,
  click,
  prev,
  next,
  score,
}: Data): JSX.Element {
  let q = data.filter((e: Questions) => e.id === qnum)[0]
  const { question, possibleAnswers, correctAnswer, id } = q

  return (
    <>
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
                onChange={() => click(id, e)}
              />
              <Qlabel htmlFor={`${id}-${e}`}>{e}</Qlabel>
            </QuestNum>
          )
        })}
      </ul>
      {qnum > 1 && <PrevBtn onClick={prev}></PrevBtn>}
      {qnum < datalen ? (
        <NextBtn onClick={next}></NextBtn>
      ) : (
        <SubmitBtn onClick={score}>finish</SubmitBtn>
      )}
    </>
  )
}

const Qtitle = styled.h1`
  color: ${COLOR.red};
  margin-bottom: 20px;
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
