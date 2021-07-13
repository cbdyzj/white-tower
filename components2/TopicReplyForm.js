import styled from 'styled-components'
import ContrastButton from './ContrastButton'
import Text from './Text'
import TextLink from './TextLink'
import { scrollToTop } from '../utils/scroll'

const _TopicReplyForm = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;

  & > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  & > .input-body {
    padding: 10px;

    & > textarea {
      width: 100%;
      resize: none;
      border-radius: 2px;
      border: 1px solid #ccc;
      overflow: hidden;
      overflow-wrap: break-word;
      outline: none;
      padding: 6px;
      min-height: 120px;

      &::placeholder {
        color: #c0c0c0;
      }
    }
  }

  & > .footer {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  & > .additional {
    padding: 10px;
    text-align: right;
  }
`

export default function TopicReplyForm(props) {

    function handleInput(ev) {
        const target = ev.target
        target.style.height = 'auto'
        target.style.height = ev.target.scrollHeight + 'px'
    }

    function handleSubmit(ev) {
        console.log('handleSubmit', ev)
        ev.preventDefault()
    }

    return (
        <_TopicReplyForm className="shadow" onSubmit={handleSubmit}>
            <div className="header">
                <Text.Black className="text-sm">添加一条新回复</Text.Black>
                <TextLink onClick={scrollToTop} className="text-sm">回到顶部</TextLink>
            </div>
            <div className="input-body top-border">
                <textarea className="text-sm" onChange={handleInput}/>
            </div>
            <div className="footer top-border">
                <ContrastButton type="submit" className="font-medium text-sm">回复</ContrastButton>
                <Text.Gray className="text-sm">请尽量让自己的回复能够对别人有帮助</Text.Gray>
            </div>
            <div className="additional top-border">
                <TextLink className="text-sm" href={'/'}>← 白塔阅读</TextLink>
            </div>
        </_TopicReplyForm>
    )
}