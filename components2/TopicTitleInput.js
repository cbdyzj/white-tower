import styled from 'styled-components'
import Text from './Text'
import { useState } from 'react'

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
        <_TopicTitleInput>
            <div className="title">
                <Text.Black className="text-sm">主题标题</Text.Black>
                {countdown >= 0 && (
                    <Text.LightGray className="text-sm">{countdown}</Text.LightGray>
                )}
                {countdown < 0 && (
                    <Text.Red className="text-sm">{countdown}</Text.Red>
                )}            </div>
            <div className="input top-border">
                <textarea className="text-sm" rows="1" value={inputValue} onChange={handleInput}
                          placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"/>
            </div>
        </_TopicTitleInput>
    )
}