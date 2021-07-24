import TopicReplyListItem from '../components/TopicReplyListItem'
import styled from 'styled-components'
import Pagination from '../components/Pagination'

const _TopicReplyList = styled.div`
  background-color: #fff;
  border-radius: 2px;

  & > .head {
    padding: var(--widget-padding);
  }
`

export default function TopicReplyList(props) {

    const topic = props.topic

    return (
        <_TopicReplyList style={props.style}>
            <div className="head">
                <span className="text-sm text-gray">9 条回复</span>
                <span style={{ color: '#e2e2e2' }} className="text-sm">&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                <span className="text-sm text-gray">2021-07-23 20:26:56 +08:00</span>
            </div>
            {topic.replyList.map((it, index) => (
                <TopicReplyListItem className="top-border" key={it.replyId} index={index + 1} item={it}/>
            ))}
            <Pagination className="top-border" pageIndex={1} pageTotal={7}/>
        </_TopicReplyList>
    )
}