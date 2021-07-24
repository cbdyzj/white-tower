import styled from 'styled-components'

const _LabelLink = styled.a`
  display: inline-block;
  padding: 4px;
  background-color: #f5f5f5;
  border-radius: 2px;
  color: #999;
  cursor: pointer;
  font-size: .75rem;
  line-height: 1;

  &:hover {
    color: #777;
    background-color: #e2e2e2;
  }
`

export default function LabelLink(props) {

    return (
        <_LabelLink href={props.href}>
            {props.children}
        </_LabelLink>
    )
}