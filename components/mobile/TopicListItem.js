import styled from 'styled-components'
import Avatar from '../Avatar'
import CountLink from '../CountLink'
import LabelLink from '../LabelLink'
import Text from '../Text'
import TextLink from '../TextLink'
import { getTimeDurationText } from '../../utils/time'

const _TopicListItem = styled.div`
  padding: 5px;

  & > .avatar {
    padding-right: 10px;
  }

  & > .reply-synopsis {
    width: calc(100% - 24px - 10px - 70px);

    & > div:not(:first-child) {
      margin-top: 5px;
    }
  }

  & > .reply-count {
    width: 70px;
  }
`

export default function TopicListItem(props) {
    const item = props.item

    return (
        <_TopicListItem className={`flex w-full ${props.className || ''}`}>
            <div className="avatar">
                <Avatar href={'/user/' + encodeURIComponent(item.postUser)} src={item.postUserAvatarUrl} size="xs"/>
            </div>
            <div className="reply-synopsis">
                <div>
                    <LabelLink href={'/go/' + item.nodeCode}>{item.nodeName}</LabelLink>
                    <Text.LightGray className="text-xs">&nbsp;&nbsp;•&nbsp;&nbsp;</Text.LightGray>
                    <TextLink className="text-xs font-bold" href={'/user/' + encodeURIComponent(item.postUser)}>
                        {item.postUser}
                    </TextLink>
                </div>
                <div>
                    <TextLink typical href={'/t/' + item.topicId}>{item.title}</TextLink>
                </div>
                <div>
                    <Text.LightGray className="text-xs">{getTimeDurationText(item.updatedTime)}</Text.LightGray>
                    {item.replyCount > 0 && (
                        <>
                            <Text.LightGray className="text-xs">&nbsp;&nbsp;•&nbsp;&nbsp;</Text.LightGray>
                            <TextLink className="text-xs font-bold"
                                      href={'/user/' + encodeURIComponent(item.lastReplyUser)}>
                                {item.lastReplyUser}
                            </TextLink>
                        </>
                    )}
                </div>
            </div>
            <div className="reply-count flex flex-row-reverse items-center">
                {item.replyCount > 0 && (<CountLink href={'/t/' + item.topicId}>{item.replyCount}</CountLink>)}
            </div>
        </_TopicListItem>
    )
}