import styled from 'styled-components'

const _LightLink = styled.a`
  display: block;
  color: #ccc;

  &:hover {
    color: #999;
  }
`

export default function LightLink(props) {
    return (
        <_LightLink className="text-sm" href={props.href}>
            {props.children}
        </_LightLink>
    )
}