type Props = {
  children: string
}

// eslint-disable-next-line react/prop-types
const Title = (props: Props) => {
  return <span>{props.children}</span>
}

export default Title
