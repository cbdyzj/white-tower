import styled from 'styled-components'
import Image from 'next/image'
import Button from '../Button'
import SpanNo from '../SpanNo'
import { getTimeDurationText } from '../../utils/time'

const TopicReplyListItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;

  & > :first-child {
    flex: none;
  }

  & > :nth-child(2) {
    flex: auto;

    & > .reply-meta {

      display: flex;
      align-items: center;
      justify-content: space-between;

      & > :first-child > .reply-time {
        margin-left: 10px;
      }

      & > :nth-child(2) {
        display: flex;
        align-items: center;
        gap: 12px;

        & > .hide-label,
        & > .thank-label {
          cursor: pointer;
          visibility: hidden;
        }

        &:hover > .hide-label,
        &:hover > .thank-label {
          visibility: visible;
        }

        & > .hide-label {
          color: #ccc;

          &:hover {
          }

        }

        & > .thank-label {
          color: #778087;

          &:hover {
            color: #4d5256;
          }
        }
      }
    }

    & > .reply-content {
      margin-top: 5px;
    }
  }
`

export default function TopicReplyListItem(props) {

    const item = props.item
    const no = props.no

    const replyUserLink = '/user/' + item.replyUser

    return (
        <TopicReplyListItemContainer className="topic-reply-item">
            <a href={replyUserLink}>
                <Image src={item.replyUserAvatarUrl} width={48} height={48}/>
            </a>
            <div className="text-sm">
                <div className="reply-meta">
                    <span>
                        <Button as="a" href={replyUserLink} className="font-medium">{item.replyUser}</Button>
                        <span className="reply-time text-xs text-light-gray">
                            {getTimeDurationText(item.replyTime)}
                        </span>
                    </span>
                    <span>
                        <span className="hide-label">隐藏</span>
                        <span className="thank-label">感谢回复者</span>
                        <SpanNo>{no}</SpanNo>
                    </span>
                </div>
                <div className="reply-content">
                    {item.replyContent}
                </div>
            </div>
        </TopicReplyListItemContainer>
    )
}