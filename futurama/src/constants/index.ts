export const FUTURAMA_API_ENDPOINT = "https://api.sampleapis.com/futurama/"

type ColorType = {
  [key: string]: string
}

export const ROUTES = [
  {
    ID: 0,
    PATH: "/info",
    LABEL: "INFO",
  },
  { ID: 1, PATH: "/characters", LABEL: "CHARACTERS" },
  {
    ID: 2,
    PATH: "/episodes",
    LABEL: "EPISODES",
  },

  {
    ID: 3,
    PATH: "/inventory",
    LABEL: "INVENTORY",
  },
  {
    ID: 4,
    PATH: "/questions",
    LABEL: "QUESTIONS",
  },
  {
    ID: 5,
    PATH: "/cast",
    LABEL: "CAST",
  },
]
export const COLOR: ColorType = {
  purple: "#a5aada",
  mint: "#34aeac",
}
