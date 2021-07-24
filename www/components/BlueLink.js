import styled from 'styled-components'


const _BlueLink = styled.a`
  color: #03C8FF;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export default function BlueLink(props) {
    return (
        <_BlueLink {...props}/>
    )
}