import styled from 'styled-components'

const _CountText = styled.span`
  display: block;
  font-size: 10px;
  line-height: 1;
  font-weight: 500;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #ccc;
  padding: 2px 5px;
  cursor: pointer;
`

export default function CountText(props) {
    return (
        <_CountText>
            {props.children}
        </_CountText>
    )
}