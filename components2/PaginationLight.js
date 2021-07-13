import styled from 'styled-components'
import DarkLink from './DarkLink'
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
    const pageTotal = props.pageTotal

    return (
        <_PaginationLight>
            <DarkLink as="button" size="s">上一页</DarkLink>
            <Text.LightGray className="font-bold" size="s">{pageIndex}/{pageTotal}</Text.LightGray>
            <DarkLink as="button" size="s">下一页</DarkLink>
        </_PaginationLight>
    )
}