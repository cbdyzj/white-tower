import styled from 'styled-components'
import Button from '../Button'

const NodeCardContainer = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .node-synopsis {
    padding: 10px;

    & > .meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    & > .description {
      margin-top: 10px;
    }
  }

  & > .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

`

export default function NodeCard(props) {
    return (
        <NodeCardContainer>
            <div className="node-synopsis">
                <div className="meta">
                    <span>
                        <Button as="a" href={'/'}>白塔阅读</Button>
                        &nbsp;&nbsp;›&nbsp;&nbsp;
                        <span>{props.nodeName}</span>
                    </span>
                    <span className="text-xs">主题总数 34160</span>
                </div>
                <div className="text-sm description">
                    分享你看到的有趣的，好玩儿，欢迎从这里获取灵感。
                </div>
            </div>
            <div className="footer top-divider-line">
                <Button className="font-medium text-sm">创建新主题</Button>
                <Button className="text-xs">加入收藏</Button>
            </div>
        </NodeCardContainer>
    )
}