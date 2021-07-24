import styled from 'styled-components'
import TextLink from '../components/TextLink'

const _NodeNav = styled.div`
  background-color: #fff;
  border-radius: 2px;

  & > .head {
    padding: 10px;
  }

  & > .nav-item {
    padding: 10px;
    display: flex;
    align-items: center;

    & > :first-child {
      text-align: right;
      flex: none;
      width: 80px;
    }

    & > :nth-child(2) {
      margin: -10px 0 0 10px;
      flex: auto;
      display: flex;
      flex-wrap: wrap;

      & > * {
        margin: 10px 10px 0 0;
      }
    }
  }
`

export default function NodeNav(props) {

    const nodeNavList = props.nodeNavList

    return (
        <_NodeNav style={props.style} className="shadow">
            <div className="head flex justify-between text-sm">
                <span className="text-light-gray"><strong>白塔阅读</strong> / 节点导航</span>
                <TextLink>浏览全部节点{props.showArrow && (' →')}</TextLink>
            </div>
            {nodeNavList.map(item => (
                <div key={item.title} className="nav-item text-sm top-border">
                    <div className="text-light-gray">{item.title}</div>
                    <div>
                        {item.nodeList.map(it => (
                            <TextLink key={it.nodeCode} href={'/go/' + it.nodeCode} >
                                {it.nodeName}
                            </TextLink>
                        ))}
                    </div>
                </div>
            ))}

        </_NodeNav>
    )
}