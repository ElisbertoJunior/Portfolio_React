import { Title as TilteStyle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

// eslint-disable-next-line react/prop-types
const Title = (props: Props) => {
  return <TilteStyle fontSize={props.fontSize}>{props.children}</TilteStyle>
}

export default Title
