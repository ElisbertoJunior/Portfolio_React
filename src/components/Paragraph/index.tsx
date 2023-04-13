import { P } from './styles'

export type Props = {
  children: string
  typeText?: 'primary' | 'secondary'
  fontSize?: number
}

// eslint-disable-next-line react/prop-types
const Paragraph = ({ children, typeText = 'primary', fontSize }: Props) => {
  return (
    <P fontSize={fontSize} typeText={typeText}>
      {children}
    </P>
  )
}

export default Paragraph
