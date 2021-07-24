import styled from 'styled-components'
import TabButton from '../components/TabButton'
import TextLink from '../components/TextLink'
import TopicListItem from '../components/TopicListItem'

const _IndexTopicList = styled.div`
  background-color: #fff;
  border-radius: 2px;
  width: 100%;

  & > .tabs {
    padding: 10px;

    & > * {
      margin-right: 4px;
    }
  }

  & > .nodes {
    background-color: #f9f9f9;
    padding: 10px 20px;

    & > * {
      margin-right: 1rem;
    }
  }

  & > .foot {
    padding: 10px;
  }
`

export default function IndexTopicList(props) {

    const topicList = props.topicList

    return (
        <_IndexTopicList className="shadow">
            <div className="tabs">
                <TabButton current>读书</TabButton>
                <TabButton>奇幻</TabButton>
                <TabButton>网文</TabButton>
                <TabButton>历史</TabButton>
            </div>
            <div className="nodes text-sm">
                <TextLink href={'/go/gm'}>诡秘之主</TextLink>
                <TextLink href={'/go/gmydz'}>诡秘：从阅读者开始</TextLink>
                <TextLink href={'/go/ksl'}>克苏鲁的呼唤</TextLink>
            </div>
            <div>
                {topicList.map(it => (
                    <TopicListItem key={it.topicId} showNodeLabel className="top-border" item={it}/>
                ))}
            </div>
            <div className="foot text-sm top-border">
                <span>»&nbsp;&nbsp;</span>
                <TextLink href={'/recent'}>更多新主题</TextLink>
            </div>
        </_IndexTopicList>
    )
}