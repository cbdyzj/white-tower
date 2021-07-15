import styled from 'styled-components'

const _TabButton = styled.a`
  color: #555;
  padding: 2px 8px;
  border-radius: 2px;
  cursor: pointer;

  &:hover,
  &:active {
    color: #000;
    background-color: #f5f5f5;
  }

  &.current {
    background-color: #333344;
    color: #fff;

    &:hover,
    &:active {
      background-color: #445;
    }
  }
`

export default function TabButton(props) {
    return (
        <_TabButton className={`text-sm ${props.current ? 'current' : ''}`}>
            {props.children}
        </_TabButton>
    )
}