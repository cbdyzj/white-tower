import styled from 'styled-components'
import Button from '../Button'
import NodeNavItem from './NodeNavItem'

const NodeNavContainer = styled.div`
  margin-top: 20px;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
`

export default function NodeNav(props) {

    const nodeNavList = props.nodeNavList

    return (
        <NodeNavContainer>
            <div className="header text-sm">
                <span className="text-light-gray">白塔阅读 / 节点导航</span>
                <Button as="span">浏览全部节点</Button>
            </div>
            {nodeNavList.map(it => (
                <NodeNavItem className="top-divider-line" key={it.title} nodeNav={it}/>
            ))}
        </NodeNavContainer>
    )
}