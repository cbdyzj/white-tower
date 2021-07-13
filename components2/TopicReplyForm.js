import styled from 'styled-components'
import ContrastButton from './ContrastButton'
import Text from './Text'
import TextLink from './TextLink'
import { scrollToTop } from '../utils/scroll'

const _TopicReplyForm = styled.form`
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

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
    }
  }

  & > .footer {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      padding-left: .5rem;
      padding-right: .5rem;
    }
  }

  & > .additional {
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
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
        <_TopicReplyForm onSubmit={handleSubmit}>
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