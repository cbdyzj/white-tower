import styled from 'styled-components'
import Button from '../Button'

const TopicReplyInputContainer = styled.div`
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

  & > .input-area {
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
  }
`


export default function ReplyTopicInput(props) {

    function handleInput(ev) {
        const target = ev.target
        target.style.height = 'auto'
        target.style.height = ev.target.scrollHeight + 'px'
    }

    return (
        <TopicReplyInputContainer as="form" className="text-sm">
            <div className="header">
                <span>添加一条新回复</span>
                <Button as="a">回到顶部</Button>
            </div>
            <div className="input-area top-border">
                <textarea className="text-sm" onChange={handleInput}/>
            </div>
            <div className="footer top-border">
                <Button className="font-medium text-sm">回复</Button>
                <span className="text-gray">请尽量让自己的回复能够对别人有帮助</span>
            </div>

        </TopicReplyInputContainer>
    )
}