import { type } from 'os'

const darkTheme = {
  colorPrimary: '#fff',
  colorSecondary: '#eee',
  backgroundColor: '#282a35',
  buttonBgColor: '#fff',
  borderColor: '#c1c1c1'
}

export default darkTheme

export type Theme = {
  colorPrimary: string
  colorSecondary: string
  backgroundColor: string
  buttonBgColor: string
  borderColor: string
}
