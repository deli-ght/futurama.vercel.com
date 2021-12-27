export const FUTURAMA_API_ENDPOINT = "https://api.sampleapis.com/futurama/"

type ColorType = {
  [key: string]: string
}

export const ROUTES = [
  {
    ID: 0,
    PATH: "/cast",
    LABEL: "CAST",
  },
  { ID: 1, PATH: "/characters", LABEL: "CHARACTERS" },
  {
    ID: 2,
    PATH: "/episodes",
    LABEL: "EPISODES",
  },
  {
    ID: 3,
    PATH: "/info",
    LABEL: "INFO",
  },
  {
    ID: 4,
    PATH: "/inventory",
    LABEL: "INVENTORY",
  },
  {
    ID: 5,
    PATH: "/questions",
    LABEL: "QUESTIONS",
  },
]
export const COLOR: ColorType = {
  purple: "#a5aada",
  mint: "#34aeac",
}
