import styled from 'styled-components'
import TopicReplyList from './TopicReplyList'

const TopicReplyContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .meta {
    padding: 10px;
  }
`

export default function TopicReply(props) {

    const topic = props.topic

    return (
        <TopicReplyContainer>
            <div className="meta text-sm text-gray">
                <span>{topic.replyCount + ' 条回复'}</span>
                <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                <span>{topic.updatedTime}</span>
            </div>
            <TopicReplyList topic={topic}/>
        </TopicReplyContainer>
    )
}