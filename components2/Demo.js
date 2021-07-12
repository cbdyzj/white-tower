import styled from 'styled-components'

const _Demo = styled.div`
  margin: 1rem 0;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

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
        <_Demo>
            <h3 className="title text-xl font-medium">{props.title}</h3>
            <div className="component top-border">{props.children}</div>
        </_Demo>
    )
}