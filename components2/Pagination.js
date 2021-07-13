import styled from 'styled-components'
import { useState } from 'react'
import DarkLink from './DarkLink'
import Text from './Text'

const _Pagination = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .page-index {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;

    & > input {
      width: 52px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 4px;
    }

    & > button {
      min-width: 26px;
    }

    & > .page-index-input {
      color: #ccc;

      &:focus {
        color: #666;
        border: 1px solid #ccc;
      }
    }
  }

  & > .page-button {
    display: flex;
    gap: 4px;
  }
`

const PAGE_NUMBER_COUNT = 9
const PAGE_NUMBER_OFFSET = 5

export default function Pagination(props) {

    const pageIndex = props.pageIndex
    const pageTotal = props.pageTotal

    const [pageIndexValue, setPageIndexValue] = useState(String(props.pageIndex))

    function handleKeyDown(ev) {
        if (ev.code !== 'Enter') {
            return
        }
        location.reload()
    }

    function handleInputChange(ev) {
        const target = ev.target
        target.focus()
        const val = Number(target.value)
        if (!val || val < 0) {
            return
        }
        setPageIndexValue(target.value)
    }

    const numbers = []

    if (pageIndex <= PAGE_NUMBER_OFFSET) {
        for (let i = 2; i < Math.min(PAGE_NUMBER_COUNT + 1, pageTotal); i++) {
            numbers.push(i)
        }
    } else if (pageIndex + PAGE_NUMBER_OFFSET > pageTotal) {
        for (let i = pageTotal - 1; i > Math.max(pageTotal - PAGE_NUMBER_COUNT, 1); i--) {
            numbers.push(i)
        }
    } else {
        if (pageIndex > 1 && pageIndex < pageTotal) {
            numbers.push(pageIndex)
        }
        for (let i = 1; numbers.length < PAGE_NUMBER_COUNT; i++) {
            if (pageIndex - i > 1) {
                numbers.push(pageIndex - i)
            }
            if (numbers.length === PAGE_NUMBER_COUNT) {
                break
            }
            if (pageIndex + i < pageTotal) {
                numbers.push(pageIndex + i)
            }
        }
    }

    numbers.sort((a, b) => (a - b))

    return (
        <_Pagination className={props.className}>
            <div className="page-index">
                <DarkLink as="button" current={pageIndex === 1} size="s">1</DarkLink>
                {(pageIndex > PAGE_NUMBER_OFFSET) && (pageTotal > PAGE_NUMBER_COUNT) && (
                    <Text.LightGray>...</Text.LightGray>
                )}
                {numbers.map(it => (<DarkLink as="button" size="s" current={pageIndex === it} key={it}>{it}</DarkLink>))}
                {(pageIndex + PAGE_NUMBER_OFFSET <= pageTotal) && ((pageTotal > PAGE_NUMBER_COUNT)) && (
                    <Text.LightGray>...</Text.LightGray>
                )}
                {(pageTotal > 1) && (<DarkLink as="button" current={pageIndex === pageTotal} size="s">{pageTotal}</DarkLink>)}
                <input className="page-index-input" type="number" value={pageIndexValue}
                       onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </div>
            <div className="page-button">
                <DarkLink as="button" size="s">上一页</DarkLink>
                <DarkLink as="button" size="s">下一页</DarkLink>
            </div>
        </_Pagination>
    )
}