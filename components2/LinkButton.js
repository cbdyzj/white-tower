import styled from 'styled-components'
import { getTextSizeClass } from '../utils/text'

const _LinkButton = styled.button`
  padding: 1px 4px;
  border: none;
  background: none;
  color: #778087;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`

export default function LinkButton(props) {

    const textSizeClass = getTextSizeClass(props.size)

    const style = {}

    if (props.checked) {
        Object.assign(style, {
            color: '#fff',
            backgroundColor: '#000',
        })
    }

    return (
        <_LinkButton style={style} className={`${textSizeClass} ${props.className || ''}`}>
            {props.children}
        </_LinkButton>
    )
}