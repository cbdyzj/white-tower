import TopicReplyListItem from './TopicReplyListItem'
import styled from 'styled-components'
import Pagination from '../Pagination'

const TopicReplyListContainer = styled.div`

  & > .topic-reply-item {
    border-top: 1px solid #e2e2e2;
  }
`

export default function TopicReplyList(props) {

    const topic = props.topic

    return (
        <TopicReplyListContainer>
            {topic.replyList.map((it, index) => (
                <TopicReplyListItem key={it.replyId} no={index + 1} item={it}/>
            ))}
            <Pagination className="top-divider-line"/>
        </TopicReplyListContainer>
    )
}