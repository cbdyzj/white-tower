import styled from 'styled-components'
import { getTextSizeClass } from '../utils/text'

const _TextLink = styled.a`
  color: #778087;
  cursor: pointer;

  &:hover,
  &:active {
    color: #4d5256;
    text-decoration: underline;
  }

  &.typical:visited {
    color: #afb9c1;
  }
`

export default function TextLink(props) {

    const textSizeClass = getTextSizeClass(props.size)
    const className = `${textSizeClass} ${props.typical ? 'typical' : ''} ${props.className || ''}`

    return (
        <_TextLink href={props.href} className={className}>
            {props.children}
        </_TextLink>
    )
}