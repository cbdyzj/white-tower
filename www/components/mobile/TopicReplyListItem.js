import styled from 'styled-components'
import Avatar from '../Avatar'
import TextLink from '../TextLink'
import { getTimeDurationText } from '../../utils/time'
import CountText from '../CountText'

const _TopicReplyListItem = styled.div`
  padding: 5px;

  & > .avatar {
    padding-right: 10px;
  }

  & > .reply-synopsis {
    width: calc(100% - 24px - 10px);

    & > div:not(:first-child) {
      margin-top: 5px;
    }
  }
`

export default function TopicReplyListItem(props) {
    const item = props.item

    return (
        <_TopicReplyListItem className={`flex w-full ${props.className || ''}`}>
            <div className="avatar">
                <Avatar href={'/user/' + encodeURIComponent(item.replyUser)} src={item.replyUserAvatarUrl} size="xs"/>
            </div>
            <div className="reply-synopsis">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <TextLink className="text-xs font-bold" href={'/user/' + encodeURIComponent(item.replyUser)}>
                            {item.replyUser}
                        </TextLink>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <span className="text-xs text-light-gray">{getTimeDurationText(item.replyTime)}</span>
                    </div>
                    <div className="flex items-center">
                        <CountText>{props.index}</CountText>
                    </div>
                </div>
                <div className="text-sm text-black">
                    {item.replyContent}
                </div>
            </div>
        </_TopicReplyListItem>
    )
}