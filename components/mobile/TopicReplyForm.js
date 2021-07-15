import styled from 'styled-components'
import ContrastButton from '../ContrastButton'

const _TopicReplyForm = styled.form`
  width: 100%;
  padding: 5px;

  & > textarea {
    width: 100%;
    height: 90px;
    padding: 5px;
    resize: none;
    border-radius: 2px;
    border: 1px solid #ccc;
    overflow: hidden;
    overflow-wrap: break-word;
    outline: none;

    &:focus {
      border: 1px solid rgba(128, 128, 160, .6);
    }

    &::placeholder {
      color: #c0c0c0;
    }
  }

  & > button {
    margin-top: 5px;
  }
`

export default function TopicReplyForm(props) {
    return (
        <_TopicReplyForm>
            <textarea className="text-base"/>
            <ContrastButton className="font-medium text-sm w-full">回复</ContrastButton>
        </_TopicReplyForm>
    )
}