import styled from 'styled-components'
import BlueLink from '../../components/BlueLink'
import ContrastButton from '../../components/ContrastButton'
import TextLink from '../../components/TextLink'

const _NodeCard = styled.div`
  border-radius: 2px;
  overflow: hidden;

  & > .synopsis {
    color: #fff;
    padding: var(--widget-padding-sm);
    background-color: #001D25;

    & > .description {
      margin-top: 10px;
    }
  }

  & > .operation {
    background-color: #fff;
    padding: var(--widget-padding-sm);

    & > button:first-child {
      padding: 4px 8px;
    }
  }

`

export default function NodeCard(props) {
    return (
        <_NodeCard className="shadow">
            <div className="synopsis text-base">
                <div className="flex justify-between items-center">
                    <span><BlueLink>白塔阅读</BlueLink>&nbsp;&nbsp;›&nbsp;&nbsp;读书</span>
                    <span className="text-xs">主题总数 2333</span>
                </div>
                <div className="description text-sm">
                    一本书，一个世界
                </div>
            </div>
            <div className="operation flex justify-between items-center">
                <ContrastButton className="text-sm font-bold">创建新主题</ContrastButton>
                <TextLink className="text-xs">加入收藏</TextLink>
            </div>
        </_NodeCard>
    )
}