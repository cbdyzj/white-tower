import TopicListItem from '../components/TopicListItem'
import Pagination from '../components/Pagination'
import styled from 'styled-components'

const _NodeTopicList = styled.div`
  background-color: #fff;
  border-radius: 2px;

  & > .foot {
    padding: 10px;
  }
`

export default function NodeTopicList(props) {

    const topicList = props.topicList

    return (
        <_NodeTopicList style={props.style} className="shadow">
            <Pagination pageIndex={7} pageTotal={20}/>
            {topicList.map(it => (
                <TopicListItem key={it.topicId} className="top-border" item={it}/>
            ))}
            <Pagination className="top-border" pageIndex={7} pageTotal={20}/>
            <div className="foot flex justify-between items-center top-border">
                <span className="text-gray text-sm">第 1 到 20 / 共 2496 个主题</span>
                <span className="text-black text-sm">598 人收藏了这个节点</span>
            </div>
        </_NodeTopicList>
    )
}