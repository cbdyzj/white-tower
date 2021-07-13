import styled from 'styled-components'

const _NodeLink = styled.a`
  display: block;
  color: #778087;
  padding: 4px 10px;
  border-radius: 16px;
  border: 1px solid #e5e5e5;

  &:hover,
  &:active {
    color: #333;
    border: 1px solid #ccc;
    box-shadow: 0 1px 2px rgba(0, 0, 32, .1);
  }
`

export default function NodeLink(props) {
    return (
        <_NodeLink href={props.href} className="text-sm">
            {props.children}
        </_NodeLink>
    )
}