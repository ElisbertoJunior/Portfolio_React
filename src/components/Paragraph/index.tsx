import { P } from './styles'

export type Props = {
  children: string
  typeText?: 'primary' | 'secondary'
}

// eslint-disable-next-line react/prop-types
const Paragraph = ({ children, typeText = 'primary' }: Props) => {
  return <P typeText={typeText}>{children}</P>
}

export default Paragraph
