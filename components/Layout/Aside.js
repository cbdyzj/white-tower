import styled from 'styled-components'

const AsideContainer = styled.div`
  border-radius: 2px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;
`

export default function Aside(props) {

    return (
        <AsideContainer>
            侧边栏
        </AsideContainer>
    )
}