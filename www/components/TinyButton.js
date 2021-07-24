import styled from 'styled-components'

const _TinyButton = styled.button`
  background-color: #f0f0f0;
  font-size: 12px;
  line-height: 12px;
  display: inline-block;
  padding: 4px;
  border-radius: 2px;
  border: 1px solid #ddd;
  color: #666;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #e0e0e0;
    border: 1px solid #C0C0C0;
    color: #333;
  }
`

export default function TinyButton(props) {
    return (
        <_TinyButton className={props.className || ''}>
            {props.children}
        </_TinyButton>
    )
}