import styled from 'styled-components'
import { getTimeDurationText } from '../utils/time'
import Image from 'next/image'
import Button from './Button'

const TopicContentContainer = styled.div`
  border-radius: 2px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .meta {
    padding: 10px;
    border-bottom: 1px solid #e2e2e2;

    & > a.post-user-avatar {
      display: flex;
      float: right;
    }

    & > h1.title {
      margin: 10px 0 0;
      padding: 0;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: normal;
    }

    & > .post-statistics {
      margin-top: 10px;
    }
  }

  & > .content {
    padding: 10px;
  }

  & > .additional {
    padding: 6px;
    background: linear-gradient(to bottom, #eee 0, #ccc 100%);
    color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > :first-child > button {
      border: none;
      background: none;
      cursor: pointer;
      padding: 0 8px;
      border-radius: 2px;
      text-shadow: rgb(255, 255, 255) 0 1px 0;

      &:hover {
        background-color: rgba(255, 255, 255, .3);
      }
    }

    & > :nth-child(2) > span {
      color: rgb(153, 153, 153);
      text-shadow: rgb(255, 255, 255) 0 1px 0;
    }
  }
`

export default function TopicContent(props) {
    const topic = props.topic
    const postUserLink = '/user/' + topic.postUser

    const postTimeText = getTimeDurationText(topic.postTime)

    return (
        <TopicContentContainer>
            <div className="meta">
                <a className="post-user-avatar" href={postUserLink}>
                    <Image src={topic.postUserAvatarUrl} width={72} height={72}/>
                </a>
                <span>
                    <Button as="a" href={'/'}>白塔阅读</Button>
                    &nbsp;&nbsp;›&nbsp;&nbsp;
                    <span>{topic.node}</span>
                </span>
                <h1 className="title">{topic.title}</h1>
                <div className="post-statistics text-xs text-gray">
                    <Button as="a" href={postUserLink}>{topic.postUser}</Button>
                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span>{postTimeText}</span>
                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span>1374 次点击</span>
                </div>
            </div>
            <div className="content">{topic.content}</div>
            <div className="additional text-xs">
                <div>
                    <button>加入收藏</button>
                    <button>忽略主题</button>
                    <button>感谢</button>
                </div>
                <div>
                    <span>1374 次点击</span>
                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span>3 人收藏</span>
                </div>
            </div>
        </TopicContentContainer>
    )
}
