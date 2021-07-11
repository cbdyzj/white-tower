import TopicListItem from '../TopicListItem'
import styled from 'styled-components'
import Button from '../Button'

const IndexTopicListContainer = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .node-line {
    padding: 10px;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;

    & > a {
      color: #555;
      padding: 2px 8px;
      border-radius: 2px;

      &:hover {
        color: #000;
        background-color: #f5f5f5;
      }
    }

    & > a.current {
      background-color: #333344;
      color: #fff;

      &:hover {
        background-color: #445;
      }
    }
  }

  & > .additional {
    padding: 10px;


    & > .recent-link {
      color: #778087;

      &:hover {
        color: #fff;
      }
    }
  }
`

export default function IndexTopicList(props) {

    const topicList = props.topicList

    return (
        <IndexTopicListContainer>
            <div className="node-line text-sm">
                <a className="current" href={'/?tab=read'}>读书</a>
                <a href={'/?tab=read'}>奇幻</a>
                <a href={'/?tab=read'}>都市</a>
                <a href={'/?tab=read'}>历史</a>
                <a href={'/?tab=read'}>游戏</a>
                <a href={'/?tab=read'}>悬疑</a>
                <a href={'/?tab=read'}>轻小说</a>
            </div>
            {topicList.map(it => (
                    <TopicListItem key={it.topicId}
                                   className="top-divider-line"
                                   showNodeLabel
                                   item={it}/>
                )
            )}
            <div className="additional top-divider-line text-sm">
                <span>»&nbsp;</span>
                <Button as="a" className="recent-link">更多新主题</Button>
            </div>
        </IndexTopicListContainer>
    )
}