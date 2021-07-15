import styled from 'styled-components'
import Text from './Text'
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
                <Text.Black className="text-sm">正文</Text.Black>
                {countdown >= 0 && (
                    <Text.LightGray className="text-sm">{countdown}</Text.LightGray>
                )}
                {countdown < 0 && (
                    <Text.Red className="text-sm">{countdown}</Text.Red>
                )}
            </div>
            <div className="input text-sm top-border">
                <MarkdownEditor onChange={handleInput}/>
            </div>
        </_TopicContentInput>
    )
}