import Pagination from './Pagination'
import TopicListItem from './TopicListItem'
import styled from 'styled-components'

const NodeTopicListContainer = styled.div`

  margin-top: 20px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .topic-item {
    border-top: 1px solid #e2e2e2;
  }

  & > .summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
`

export default function NodeTopicList(props) {
    const topicList = props.topicList

    return (
        <NodeTopicListContainer>
            <Pagination/>
            {topicList.map(it => (
                <TopicListItem key={it.topicId} showNodeLabel={false} item={it}/>)
            )}
            <Pagination className="top-divider-line"/>
            <div className="summary top-divider-line text-sm">
                <span className="text-gray">第 1 到 20 / 共 34161 个主题</span>
                <span>4529 人收藏了这个节点</span>
            </div>
        </NodeTopicListContainer>
    )
}