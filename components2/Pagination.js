import styled from 'styled-components'
import { useState } from 'react'
import LinkButton from './LinkButton'
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

export default function Pagination(props) {

    const pageTotal = props.pageTotal
    const pageIndex = props.pageIndex

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

    if (pageIndex <= 5) {
        for (let i = 2; i < Math.min(10, pageTotal); i++) {
            numbers.push(i)
        }
    } else if (pageIndex + 4 >= pageTotal) {
        for (let i = pageTotal - 1; i > Math.max(pageTotal - 9, 1); i--) {
            numbers.push(i)
        }
    } else {
        if (pageIndex > 1 && pageIndex < pageTotal) {
            numbers.push(pageIndex)
        }
        for (let i = 1; numbers.length < 9; i++) {
            if (pageIndex - i > 1) {
                numbers.push(pageIndex - i)
            }
            if (numbers.length === 9) {
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
                <LinkButton checked={pageIndex === 1} size="s">1</LinkButton>
                {pageIndex > 5 && (<Text.LightGray>...</Text.LightGray>)}
                {numbers.map(it => (<LinkButton size="s" checked={pageIndex === it} key={it}>{it}</LinkButton>))}
                {pageIndex + 4 < pageTotal && (<Text.LightGray>...</Text.LightGray>)}
                <LinkButton checked={pageIndex === pageTotal} size="s">{pageTotal}</LinkButton>
                <input className="page-index-input" type="number" value={pageIndexValue}
                       onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            </div>
            <div className="page-button">
                <LinkButton size="s">上一页</LinkButton>
                <LinkButton size="s">下一页</LinkButton>
            </div>
        </_Pagination>
    )
}