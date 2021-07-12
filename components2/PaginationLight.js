import styled from 'styled-components'
import LinkButton from './LinkButton'
import Text from './Text'

const _PaginationLight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`

export default function PaginationLight(props) {

    const pageIndex = props.pageIndex
    const total = props.total

    return (
        <_PaginationLight>
            <LinkButton size="s">上一页</LinkButton>
            <Text.LightGray className="font-bold" size="s">{pageIndex}/{total}</Text.LightGray>
            <LinkButton size="s">下一页</LinkButton>
        </_PaginationLight>
    )
}