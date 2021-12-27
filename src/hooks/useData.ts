import useSWR from "swr"
import { fetcher } from "../utils/fetcher"
import { FUTURAMA_API_ENDPOINT } from "../constants"

export const useData = (path: string) => {
  return useSWR(`${FUTURAMA_API_ENDPOINT}${path}`, fetcher)
}
