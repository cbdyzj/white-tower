import styled from 'styled-components'
import Pagination from '../components/Pagination'
import TopicListItem from '../components/TopicListItem'
import TextLink from '../components/TextLink'

const _RecentTopicList = styled.div`
  background-color: #fff;
  border-radius: var(--widget-rounded);

  & > .head {
    padding: var(--widget-padding);
  }
`

export default function RecentTopicList(props) {

    const topicList = props.topicList

    return (
        <_RecentTopicList className="shadow">
            <div className="head flex justify-between items-center">
                <div>
                    <TextLink href={'/'} className="text-base">白塔阅读</TextLink>
                    &nbsp;&nbsp;›&nbsp;&nbsp;
                    <span className="text-base text-black">最近的主题</span>
                </div>
                <div>
                    <span className="text-xs text-light-gray">共 791461 个主题</span>
                </div>
            </div>
            <Pagination className="top-border" pageIndex={2} pageTotal={17}/>
            {topicList.map(it => (
                <TopicListItem className="top-border" showNodeLabel key={it.topicId} item={it}/>
            ))}
            <Pagination className="top-border" pageIndex={2} pageTotal={17}/>
        </_RecentTopicList>
    )
}