import styled from 'styled-components'
import Avatar from '../Avatar'
import CountLink from '../CountLink'
import LabelLink from '../LabelLink'
import TextLink from '../TextLink'
import { getTimeDurationText } from '../../utils/time'

const _TopicListItem = styled.div`
  padding: 5px;

  & > .avatar {
    padding-right: 10px;
  }

  & > .topic-synopsis {
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
            <div className="topic-synopsis">
                {props.showNodeLabel && (
                    <div>
                        <LabelLink href={'/go/' + item.nodeCode}>{item.nodeName}</LabelLink>
                        <span className="text-xs text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                        <TextLink className="text-xs font-bold" href={'/user/' + encodeURIComponent(item.postUser)}>
                            {item.postUser}
                        </TextLink>
                    </div>
                )}
                <div>
                    <TextLink typical href={'/t/' + item.topicId}>{item.title}</TextLink>
                </div>
                <div>
                    {!props.showNodeLabel && (
                        <>
                            <TextLink className="text-xs font-bold" href={'/user/' + encodeURIComponent(item.postUser)}>
                                {item.postUser}
                            </TextLink>
                            <span className="text-xs text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                        </>
                    )}
                    <span className="text-xs text-light-gray">{getTimeDurationText(item.updatedTime)}</span>
                    {item.replyCount > 0 && (
                        <>
                            <span className="text-xs text-light-gray">&nbsp;&nbsp;•&nbsp;&nbsp;最后回复来自&nbsp;</span>
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