import styled from 'styled-components'
import ContrastButton from '../ContrastButton'
import TextLink from '../TextLink'
import { scrollToTop } from '../../utils/scroll'
import Avatar from '../Avatar'

const _TopicReplyForm = styled.form`
  background-color: #fff;
  border-radius: 2px;
  width: 100%;

  & > .head {
    padding: var(--widget-padding-sm);

  }

  & > .body {
    width: 100%;
    padding: var(--widget-padding-sm);

    & > textarea {
      width: 100%;
      height: 90px;
      padding: 5px;
      resize: none;
      border-radius: 2px;
      border: 1px solid #ccc;
      overflow: hidden;
      overflow-wrap: break-word;
      outline: none;

      &:focus {
        border: 1px solid rgba(128, 128, 160, .6);
      }

      &::placeholder {
        color: #c0c0c0;
      }
    }

    & > button {
      margin-top: 5px;
    }
  }

  & > .foot {
    padding: var(--widget-padding-sm);
  }
`

export default function TopicReplyForm(props) {
    return (
        <_TopicReplyForm style={props.style} className={`shadow ${props.className || ''}`}>
            <div className="head flex justify-between items-center">
                <Avatar src={'/white-tower.svg'} size="2xs"/>
                <TextLink onClick={scrollToTop} className="text-sm">回到顶部</TextLink>
            </div>
            <div className="body top-border">
                <textarea className="text-base"/>
                <ContrastButton className="font-medium text-sm w-full">回复</ContrastButton>
            </div>
            <div className="foot top-border text-right">
                <TextLink className="text-sm" href={'/'}>← 白塔阅读</TextLink>
            </div>
        </_TopicReplyForm>
    )
}