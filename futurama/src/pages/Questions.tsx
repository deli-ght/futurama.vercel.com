import type { NextPage } from "next"
import DataList from "../components/DataList"

const Questions: NextPage = () => {
  const questionsprops = "questions"

  return <DataList dataname={questionsprops}></DataList>
}

export default Questions
