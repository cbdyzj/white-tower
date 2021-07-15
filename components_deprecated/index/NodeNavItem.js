import styled from 'styled-components'
import Button from '../Button'

const NodeNavItemContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  & > :first-child {
    text-align: right;
    flex: none;
    width: 80px;
  }

  & > :nth-child(2) {
    flex: auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`

export default function NodeNavItem(props) {

    const nodeNav = props.nodeNav

    return (
        <NodeNavItemContainer className={`text-sm ${props.className}`}>
            <div className="text-light-gray">{nodeNav.title}</div>
            <div>
                {nodeNav.nodeList.map(it => (
                    <Button as="a" href={'/go/' + it.nodeCode} key={it.nodeCode}>
                        {it.nodeName}
                    </Button>
                ))}
            </div>
        </NodeNavItemContainer>
    )
}