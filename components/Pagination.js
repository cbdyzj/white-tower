import styled from 'styled-components'
import Button from './Button'
import { useState } from 'react'

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  & > .page-index {
    display: flex;
    gap: 4px;

    & > input {
      width: 52px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 4px;
    }

    & > button {
      min-width: 26px;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }

    & > .ellipsis {
      color: #ccc;
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

    & > button {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`

export default function Pagination(props) {

    const p1 = [1, 2, 3]
    const p2 = 10

    const [pageIndex, setPageIndex] = useState('1')

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
        setPageIndex(target.value)
    }

    return (
        <PaginationContainer className={props.className}>
            <div className="page-index">
                {p1.map(it => (<Button key={it}>{it}</Button>))}
                <span className="ellipsis">...</span>
                <Button>{p2}</Button>
                <input className="page-index-input"
                       type="number"
                       value={pageIndex}
                       onChange={handleInputChange}
                       onKeyDown={handleKeyDown}/>
            </div>
            <div className="page-button">
                <Button>上一页</Button>
                <Button>下一页</Button>
            </div>
        </PaginationContainer>
    )
}