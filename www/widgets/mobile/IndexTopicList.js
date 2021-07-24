import styled from 'styled-components'
import { NoUnread } from '../../components/UnreadReminder'
import TabButton from '../../components/TabButton'
import TopicListItemMobile from '../../components/mobile/TopicListItem'
import TextLink from '../../components/TextLink'

const _IndexTopicList = styled.div`
  background-color: #fff;
  border-radius: 2px;

  & > .head {
    padding: 5px 10px;
    min-height: 36px;
  }

  & > .tabs {
    padding: 5px;

    & > * {
      margin-right: 4px;
    }
  }

  & > .foot {
    padding: 5px;
  }
`

export default function IndexTopicList(props) {

    const topicList = props.topicList

    return (
        <_IndexTopicList className="shadow">
            <div className="head flex items-center">
                <NoUnread/>
            </div>
            <div className="tabs top-border">
                <TabButton current>读书</TabButton>
                <TabButton>奇幻</TabButton>
                <TabButton>网文</TabButton>
                <TabButton>历史</TabButton>
            </div>
            <div>
                {topicList.map(it => (
                    <TopicListItemMobile key={it.topicId} showNodeLabel className="top-border" item={it}/>)
                )}
            </div>
            <div className="foot text-sm top-border text-right">
                <TextLink href={'/recent'}>更多&nbsp;»</TextLink>
            </div>
        </_IndexTopicList>
    )
}