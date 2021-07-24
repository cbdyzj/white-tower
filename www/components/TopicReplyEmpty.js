import styled from 'styled-components'

const _TopicReplyEmpty = styled.div`
  width: 100%;
  display: block;
  padding: 10px;
  background-color: transparent;
  border-radius: 2px;
  text-align: center;
  box-shadow: none;
  border: 2px dashed rgba(0, 0, 0, .15);
  text-shadow: 0 1px 0 rgba(255, 255, 255, .5);
  color: rgba(0, 0, 0, .15);
`

export default function TopicReplyEmpty(props) {

    return (
        <_TopicReplyEmpty className="text-sm">目前尚无回复</_TopicReplyEmpty>
    )
}