import styled from 'styled-components'
import { useState } from 'react'
import t from '../i18n/t'

const _TopicTitleInput = styled.div`
  width: 100%;

  & > .title {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > .input > textarea {
    width: 100%;
    border: none;
    resize: none;
    background-color: #f9f9f9;
    outline: 0;
    margin: 0;
    padding: 10px;

    &:focus {
      background-color: #fff;
    }

    &::placeholder {
      color: #c0c0c0;
    }
  }
`

const MAX_LENGTH = 120

export default function TopicTitleInput(props) {

    const [inputValue, setInputValue] = useState('')

    function handleInput(ev) {
        setInputValue(ev.target.value)
    }

    const countdown = MAX_LENGTH - inputValue.length

    return (
        <_TopicTitleInput className={props.className || ''}>
            <div className="title">
                <span className="text-sm text-black">主题标题</span>
                {countdown >= 0 && (
                    <span className="text-sm text-light-gray">{countdown}</span>
                )}
                {countdown < 0 && (
                    <span className="text-sm text-red">{countdown}</span>
                )}            </div>
            <div className="input top-border">
                <textarea className="text-sm" rows="1" value={inputValue} onChange={handleInput}
                          placeholder={t.TOPIC_TITLE_INPUT_PLACEHOLDER}/>
            </div>
        </_TopicTitleInput>
    )
}