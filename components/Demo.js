import styled from 'styled-components'

const _Demo = styled.div`
  margin: 1rem 0;
  border-radius: 2px;
  background-color: #fff;

  & > .title {
    padding: .5rem;
    margin: 0;
  }

  & > .component {
    padding: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;

    & > * {
      flex: none;
    }
  }
`

export default function Demo(props) {

    return (
        <_Demo className="shadow">
            <h3 className="title text-xl font-medium">{props.title}</h3>
            <div className="component top-border">{props.children}</div>
        </_Demo>
    )
}