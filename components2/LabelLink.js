import styled from 'styled-components'

const _NodeLink = styled.a`
  display: block;
  padding: 4px;
  background-color: #f5f5f5;
  border-radius: 2px;
  color: #999;
  cursor: pointer;

  &:hover {
    color: #777;
    background-color: #e2e2e2;
  }
`

export default function LabelLink(props) {

    return (
        <_NodeLink className="text-xs" href={props.href}>
            {props.children}
        </_NodeLink>
    )
}