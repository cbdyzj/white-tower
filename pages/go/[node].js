import styled from 'styled-components'
import Layout from '../../components/Layout/Layout'
import NodeCard from '../../components/NodeCard'
import Pagination from '../../components/Pagination'
import TopicCard from '../../components/TopicCard'
import topic_list from '../../__test_data__/topic_list'
import Aside from '../../components/Layout/Aside'

const ContentContainer = styled.div`

  & > .node-topic-list {
    margin-top: 20px;
    border-radius: 2px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

    & > .topic-item {
      border-top: 1px solid #e2e2e2;
    }
  }

  & .summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  & .top-divider-line {
    border-top: 1px solid #e2e2e2;
  }
`

export default function Node(props) {

    const node = props.node
    const topicList = props.topicList
    const nodeName = '分享发现'

    const content = (
        <ContentContainer>
            <NodeCard nodeName={nodeName}/>
            <div className="node-topic-list">
                <Pagination/>
                {topicList.map(it => (
                    <TopicCard key={it.topicId} nodeLabel={false} item={it}/>)
                )}
                <Pagination className="top-divider-line"/>
                <div className="summary top-divider-line text-sm">
                    <span className="text-gray">第 1 到 20 / 共 34161 个主题</span>
                    <span>4529 人收藏了这个节点</span>
                </div>
            </div>
        </ContentContainer>
    )

    return (
        <Layout aside={<Aside/>}>
            {content}
        </Layout>
    )
}

export async function getServerSideProps(ctx) {
    const { node } = ctx.query
    return {
        props: {
            node,
            topicList: topic_list,
        },
    }
}