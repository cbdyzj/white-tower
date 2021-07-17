import styled from 'styled-components'
import { useState } from 'react'
import ContrastButton from './ContrastButton'

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

    & > button {
      min-width: 26px;
    }

    & > .page-index-input {
      width: 52px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 4px;
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

function getPageNumbers(pageIndex, pageTotal) {
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
    return numbers
}


export default function Pagination(props) {

    const pageIndex = props.pageIndex
    const pageTotal = props.pageTotal

    const [pageIndexValue, setPageIndexValue] = useState(String(props.pageIndex))

    function handleKeyDown(ev) {
        if (ev.code === 'Escape') {
            ev.target.blur()
            return
        }
        if (ev.code === 'Enter' && pageIndexValue) {
            location.reload()
        }
    }

    function handleInputChange(ev) {
        const target = ev.target
        target.focus()
        if (!target.value) {
            setPageIndexValue('')
            return
        }
        const val = Number(target.value)
        if (val < 1 || val > pageTotal) {
            return
        }
        setPageIndexValue(target.value)
    }

    const numbers = getPageNumbers(pageIndex, pageTotal)

    return (
        <_Pagination className={props.className}>
            <div className="page-index">
                <ContrastButton current={pageIndex === 1} className="text-sm">1</ContrastButton>
                {(pageIndex > PAGE_NUMBER_OFFSET) && (pageTotal > PAGE_NUMBER_COUNT) && (
                    <span className="text-base text-light-gray">...</span>
                )}
                {numbers.map(it => (
                    <ContrastButton className="text-sm" current={pageIndex === it} key={it}>{it}</ContrastButton>
                ))}
                {(pageIndex + PAGE_NUMBER_OFFSET <= pageTotal) && ((pageTotal > PAGE_NUMBER_COUNT)) && (
                    <span className="text-base text-light-gray">...</span>
                )}
                {(pageTotal > 1) && (
                    <ContrastButton current={pageIndex === pageTotal} className="text-sm">{pageTotal}</ContrastButton>
                )}
                <span/>
                <input className="page-index-input" type="number" value={pageIndexValue}
                       onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </div>
            <div className="page-button">
                <ContrastButton className="text-sm">上一页</ContrastButton>
                <ContrastButton className="text-sm">下一页</ContrastButton>
            </div>
        </_Pagination>
    )
}