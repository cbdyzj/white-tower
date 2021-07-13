import styled from 'styled-components'
import ContrastButton from './ContrastButton'
import TextLink from './TextLink'
import Text from './Text'

const _TopicCreateForm = styled.form`
  width: 100%;
  border-radius: 2px;
  background-color: #fff;

  & > .input-body {
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

export default function TopicCreateForm(props) {

    function handleInput(ev) {
        const target = ev.target
        target.style.height = 'auto'
        target.style.height = ev.target.scrollHeight + 'px'
    }

    return (
        <_TopicCreateForm className="shadow">
            <div className="input-body">
                <input type="text" placeholder="请输入主题标题，如果标题能够表达完整内容，则正文可以为空"/>
                <textarea className="text-sm" onChange={handleInput} placeholder="正文"/>
            </div>
            <div className="footer top-border">
                <ContrastButton type="submit" className="font-medium text-sm">创建新主题</ContrastButton>
            </div>
            <div className="additional text-sm top-border">
                <TextLink className="text-sm">忽略这个节点</TextLink>
                <span>&nbsp;&nbsp;</span>
                <Text.LightGray className="text-sm">被忽略的节点中的主题将不会在首页出现</Text.LightGray>
            </div>
        </_TopicCreateForm>
    )
}