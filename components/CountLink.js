import styled from 'styled-components'

const _CountLink = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 0.875rem;
  line-height: 0.875rem;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 700;
  background-color: #aab0c6;
  cursor: pointer;

  &:hover {
    background-color: #969cb1;
  }

  &:visited {
    background-color: #e5e5e5;
  }
`

export default function CountLink(props) {
    return (
        <_CountLink className={props.className} href={props.href}>
            {props.children}
        </_CountLink>
    )
}