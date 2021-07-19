import styled from 'styled-components'

const _Main = styled.main`
  min-height: calc(100vh - 40px - 30px);
  padding: 5px;
`

export default function Main(props) {
    return (
        <_Main>{props.children}</_Main>
    )
}