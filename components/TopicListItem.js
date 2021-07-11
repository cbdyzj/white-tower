import Image from 'next/image'
import styled from 'styled-components'
import Button from './Button'
import LightLink from './LightLink'
import { getTimeDurationText } from '../utils/time'

const TopicListItemContainer = styled.div`
  padding: 10px;
  color: #4D5256FF;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  & > :first-child {
    display: flex;
    flex: none;
    border-radius: 4px;
    overflow: hidden;
  }

  & > .reply-content {
    flex: auto;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
  }

  & > .reply-count {
    flex: none;
    align-self: center;
    min-width: 48px;
    text-align: right;

    & > a {

      color: #fff;
      font-size: 0.875rem;
      line-height: 0.875rem;
      padding: 0 10px;
      border-radius: 12px;
      font-weight: 700;
      background-color: #aab0c6;

      &:hover {
        background-color: #969cb1;
      }
    }
  }
`

export default function TopicListItem(props) {
    const item = props.item

    const updateTimeText = getTimeDurationText(item.updatedTime)

    const postUserLink = '/user/' + item.postUser
    const topicLink = '/t/' + item.topicId

    const replied = item.replyCount > 0

    return (
        <TopicListItemContainer className="topic-item">
            <a href={postUserLink}>
                <Image src={item.postUserAvatarUrl} width={48} height={48}/>
            </a>
            <div className="reply-content">
                <div>
                    <Button as="a" href={topicLink}>{item.title}</Button>
                </div>
                <div className="text-xs">
                    {props.showNodeLabel && (
                        <>
                            <LightLink href={'/go/' + item.node}>{item.node}</LightLink>
                            <span className="text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                        </>
                    )}
                    <Button as="a" href={postUserLink} className="font-medium">{item.postUser}</Button>
                    <span className="text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                    <span className="text-light-gray">{updateTimeText}</span>
                    {replied > 0 && (
                        <>
                            <span className="text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                            <span className="text-light-gray">最后回复来自&nbsp;</span>
                            <Button as="a" href={'/user/' + item.lastReplyUser}
                                    className="font-medium">{item.lastReplyUser}</Button>
                        </>
                    )}
                </div>
            </div>
            <div className="reply-count">
                {replied > 0 && (<a href={topicLink}>{item.replyCount}</a>)}
            </div>
        </TopicListItemContainer>
    )
}
