import styled from 'styled-components'
import ContrastButton from '../components/ContrastButton'
import TextLink from '../components/TextLink'
import t from '../i18n/t'

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

  & > .foot {
    padding: 0 10px 10px;

    & > button {
      padding: 4px 8px;
    }
  }

  & > .additional {
    padding: 10px;
    text-align: right;
  }
`

export default function TopicCreateForm(props) {

    function handleInput(ev) {
        ev.target.style.height = 'auto'
        ev.target.style.height = ev.target.scrollHeight + 'px'
    }

    return (
        <_TopicCreateForm style={props.style} className="shadow">
            <div className="input-body">
                <input type="text" placeholder={t.TOPIC_TITLE_INPUT_PLACEHOLDER}/>
                <textarea className="text-sm" onChange={handleInput} placeholder="正文"/>
            </div>
            <div className="foot">
                <ContrastButton type="submit" className="font-medium text-sm">
                    创建新主题
                </ContrastButton>
            </div>
            <div className="additional text-sm top-border">
                <TextLink className="text-sm">忽略这个节点</TextLink>
                <span>&nbsp;&nbsp;</span>
                <span className="text-sm text-light-gray">被忽略的节点中的主题将不会在首页出现</span>
            </div>
        </_TopicCreateForm>
    )
}