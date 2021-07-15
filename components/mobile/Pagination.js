import styled from 'styled-components'
import ContrastButton from '../ContrastButton'
import Text from '../Text'

const _Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`

export default function Pagination(props) {

    const pageIndex = props.pageIndex
    const pageTotal = props.pageTotal

    return (
        <_Pagination>
            <ContrastButton className="text-sm">上一页</ContrastButton>
            <Text.LightGray className="font-bold text-sm">{pageIndex}/{pageTotal}</Text.LightGray>
            <ContrastButton className="text-sm">下一页</ContrastButton>
        </_Pagination>
    )
}