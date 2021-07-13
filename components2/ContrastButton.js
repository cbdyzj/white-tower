import styled from 'styled-components'

const _ContrastButton = styled.button`
  border: 1px solid #000;
  border-radius: 2px;
  padding: 2px 4px;
  background: none;
  color: #000;
  cursor: pointer;

  &:hover,
  &:active {
    color: #fff;
    background-color: #000;
  }

  &.current {
    color: #fff;
    background-color: #000;
  }
`

export default function ContrastButton(props) {

    const className = `${props.current ? 'current' : ''} ${props.className || ''}`

    return (
        <_ContrastButton style={props.style} href={props.href} className={className}>
            {props.children}
        </_ContrastButton>
    )
}