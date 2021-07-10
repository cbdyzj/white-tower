import styled from 'styled-components'

const MainContainer = styled.main`
  display: flex;
  gap: 20px;
  min-height: calc(100vh - 44px - 100px);
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;

  & > section {
    flex: auto;
  }

  & > aside {
    flex: none;
    width: 270px;
  }

  @media (max-width: 900px) {
    & > aside {
      display: none;
    }
  }
`

export default function Main(props) {
    return (
        <MainContainer>
            <section>{props.children}</section>
            {!!props.aside && (<aside>{props.aside}</aside>)}
        </MainContainer>
    )
}