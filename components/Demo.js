import styled from 'styled-components'
import Text from './Text'

const _Demo = styled.div`
  margin: 1rem 0;
  border-radius: 2px;
  background-color: #fff;

  & > .title {
    padding: 1rem;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
            <div className="title">
                <span className="text-xl font-medium">{props.title}</span>
                {!!props.platform && (<Text.Gray className="text-base">{props.platform}</Text.Gray>)}
            </div>
            <div className="component top-border">{props.children}</div>
        </_Demo>
    )
}