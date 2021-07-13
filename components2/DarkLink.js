import styled from 'styled-components'
import { getTextSizeClass } from '../utils/text'

const _DarkLink = styled.a`
  border: none;
  background: none;
  color: #778087;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  &.current {
    color: #fff;
    background-color: #000;
  }
`

export default function DarkLink(props) {

    const textSizeClass = getTextSizeClass(props.size)
    const className = `${textSizeClass} ${props.current ? 'current' : ''} ${props.className || ''}`

    return (
        <_DarkLink as={props.as} className={className}>
            {props.children}
        </_DarkLink>
    )
}