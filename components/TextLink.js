import styled from 'styled-components'

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

    const className = `${props.typical ? 'typical' : ''} ${props.className || ''}`

    return (
        <_TextLink onClick={props.onClick} href={props.href} className={className}>
            {props.children}
        </_TextLink>
    )
}