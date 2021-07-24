import styled from 'styled-components'
import TopicTitleInput from '../components/TopicTitleInput'
import TopicContentInput from '../components/TopicContentInput'
import TextLink from '../components/TextLink'
import ContrastButton from '../components/ContrastButton'

const _TopicCreateWidget = styled.div`
  background-color: #fff;
  border-radius: var(--widget-rounded);

  & > .head {
    padding: var(--widget-padding);
  }

  & > .foot {
    padding: var(--widget-padding);

    & > button {
      padding: 4px 8px;
    }
  }
`

export default function TopicCreateWidget(props) {
    return (
        <_TopicCreateWidget className="shadow">
            <div className="head">
                <TextLink href={'/'} className="text-sm">白塔阅读</TextLink>
                &nbsp;&nbsp;›&nbsp;&nbsp;
                <span className="text-sm text-black">最近的主题</span>
            </div>
            <TopicTitleInput className="top-border"/>
            <TopicContentInput className="top-border"/>
            <div className="foot flex justify-between items-center top-border">
                <ContrastButton>预览主题</ContrastButton>
                <ContrastButton>发布主题</ContrastButton>
            </div>
        </_TopicCreateWidget>
    )
}