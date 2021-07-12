import styled from 'styled-components'
import Button from '../Button'

const NewTopicInputContainer = styled.div`
  background-color: #fff;
  margin-top: 20px;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .input-area {
    padding: 10px;

    & > input {
      width: 100%;
      border-radius: 2px;
      border: 1px solid #ccc;
      outline: none;
      padding: 6px;

      &::placeholder {
        color: #c0c0c0;
      }
    }

    & > textarea {
      margin-top: 10px;
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
  }

  & > .additional {
    padding: 10px;
    text-align: right;
  }
`


export default function NewTopicInput(props) {

    function handleInput(ev) {
        const target = ev.target
        target.style.height = 'auto'
        target.style.height = ev.target.scrollHeight + 'px'
    }

    return (
        <NewTopicInputContainer as="form" className="text-sm">
            <div className="input-area">
                <input type="text" placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"/>
                <textarea className="text-sm" onChange={handleInput} placeholder="正文"/>
            </div>
            <div className="footer top-border">
                <Button className="font-medium text-sm">创建新主题</Button>
            </div>
            <div className="additional text-sm top-border">
                <Button as="a">忽略这个节点</Button>
                <span>&nbsp;&nbsp;</span>
                <span>被忽略的节点中的主题将不会在首页出现</span>
            </div>
        </NewTopicInputContainer>
    )
}