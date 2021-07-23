import styled from 'styled-components'
import Avatar from '../../components/Avatar'
import TextLink from '../../components/TextLink'
import { getTimeDurationText } from '../../utils/time'
import TinyButton from '../../components/TinyButton'

const _TopicContent = styled.div`
  background-color: #fff;
  border-radius: 2px;

  & > .head {
    padding: var(--widget-padding-sm);

    & > .title {
      margin: 10px 0 0;
      padding: 0;
      font-size: 1.25rem;
      line-height: 1.75rem;
      font-weight: normal;
    }

    & > .statistics {
      margin-top: 10px;
    }
  }

  & > .body {
    padding: var(--widget-padding-sm);
  }

  & > .foot {
    padding: 5px 5px;
    text-align: right;

    & > :not(:first-child) {
      margin-left: 8px;
    }
  }
`

export default function TopicContent(props) {

    const topic = props.topic

    const postUserLink = '/user/' + topic.postUser
    const postTimeText = getTimeDurationText(topic.postTime)

    return (
        <_TopicContent>
            <div className="head">
                <Avatar className="float-right" src={topic.postUserAvatarUrl} size="s"/>
                <span>
                    <TextLink className="text-base">白塔阅读</TextLink>
                    &nbsp;&nbsp;›&nbsp;&nbsp;
                    <TextLink href={'/go/' + topic.nodeCode}>{topic.nodeName}</TextLink>
                </span>
                <h1 className="title">{topic.title}</h1>
                <div className="statistics text-xs text-gray">
                    <TextLink href={postUserLink}>{topic.postUser}</TextLink>
                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span>{postTimeText}</span>
                    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span>1374 次点击</span>
                </div>
            </div>
            <div className="body top-border text-sm">
                {topic.content}
            </div>
            <div className="foot top-border">
                <TinyButton>加入收藏</TinyButton>
                <TinyButton>忽略主题</TinyButton>
                <TinyButton>感谢</TinyButton>
            </div>
        </_TopicContent>
    )
}