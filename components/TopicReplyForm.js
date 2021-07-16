import styled from 'styled-components'
import ContrastButton from './ContrastButton'
import TextLink from './TextLink'
import { scrollToTop } from '../utils/scroll'

const _TopicReplyForm = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;

  & > .head {
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

  & > .foot {
    padding: 0 10px 10px;
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
        ev.target.style.height = 'auto'
        ev.target.style.height = ev.target.scrollHeight + 'px'
    }

    function handleSubmit(ev) {
        console.log('handleSubmit', ev)
        ev.preventDefault()
    }

    return (
        <_TopicReplyForm className="shadow" onSubmit={handleSubmit}>
            <div className="head">
                <span className="text-sm text-black">添加一条新回复</span>
                <TextLink onClick={scrollToTop} className="text-sm">回到顶部</TextLink>
            </div>
            <div className="input-body top-border">
                <textarea className="text-sm" onChange={handleInput}/>
            </div>
            <div className="foot">
                <ContrastButton type="submit" className="font-medium text-sm">回复</ContrastButton>
                <span className="text-sm text-gray">请尽量让自己的回复能够对别人有帮助</span>
            </div>
            <div className="additional top-border">
                <TextLink className="text-sm" href={'/'}>← 白塔阅读</TextLink>
            </div>
        </_TopicReplyForm>
    )
}