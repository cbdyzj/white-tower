import styled from 'styled-components'
import Pagination from '../../components2/Pagination'
import TopicListItem from '../TopicListItem'
import Button from '../Button'

const RecentTopicListContainer = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .head {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export default function RecentTopicList(props) {

    const topicList = props.topicList

    return (
        <RecentTopicListContainer>
            <div className="head text-base">
                <div>
                    <Button as="a" href={'/'}>白塔阅读</Button>
                    &nbsp;&nbsp;›&nbsp;&nbsp;
                    <span>最近的主题</span>
                </div>
                <div className="text-light-gray text-xs">共 788898 个主题</div>
            </div>
            <Pagination className="top-border" pageIndex={6} pageTotal={120}/>
            {topicList.map(it => (
                <TopicListItem key={it.topicId} className="top-border" item={it}/>)
            )}
            <Pagination className="top-border" pageIndex={6} pageTotal={120}/>
        </RecentTopicListContainer>
    )
}