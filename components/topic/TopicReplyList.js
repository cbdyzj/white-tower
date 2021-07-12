import styled from 'styled-components'
import TopicReplyListItem from './TopicReplyListItem'
import Pagination from '../../components2/Pagination'

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
            <Pagination className="top-border" pageIndex={6} pageTotal={120}/>
        </TopicReplyListContainer>
    )
}