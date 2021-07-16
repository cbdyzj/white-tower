import styled from 'styled-components'
import MarkdownEditor from './MarkdownEditor'
import { useState } from 'react'

const _TopicContentInput = styled.div`
  width: 100%;

  & > .title {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > .input {
  }
`

const MAX_LENGTH = 20000

export default function TopicContentInput(props) {

    const [countdown, setCountdown] = useState(MAX_LENGTH)

    function handleInput(ev) {
        setCountdown(MAX_LENGTH - ev.length)
    }

    return (
        <_TopicContentInput>
            <div className="title">
                <span className="text-sm text-black">正文</span>
                {countdown >= 0 && (
                    <span className="text-sm text-light-gray">{countdown}</span>
                )}
                {countdown < 0 && (
                    <span className="text-sm text-red">{countdown}</span>
                )}
            </div>
            <div className="input text-sm top-border">
                <MarkdownEditor onChange={handleInput}/>
            </div>
        </_TopicContentInput>
    )
}