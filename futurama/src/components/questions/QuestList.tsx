import { useRef, useState } from "react"
import { Questions } from "../../types"
import QuestQna from "./QuestQna"

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
    </>
  )
}
