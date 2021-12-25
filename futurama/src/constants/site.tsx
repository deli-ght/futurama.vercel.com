import CharList from "../components/characters/CharList"

type SiteType = {
  [key: string]: JSX.Element
}
export const SITE: SiteType = {
  cast : <CastList/>;
  characters: <CharList />,
}
