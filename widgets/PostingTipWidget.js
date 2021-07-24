import styled from 'styled-components'
import TextLink from '../components/TextLink'

const _PostingTipWidget = styled.div`
  background-color: #fff;

  & > .head {
    padding: var(--widget-padding);
  }

  & > .body {
    padding: var(--widget-padding);

    & > ul {
      margin: 0;
      padding-left: 20px;

      & > li > div > p {
        margin: 10px 0;
      }
    }
  }
`

export default function PostingTipWidget(props) {
    return (
        <_PostingTipWidget className="shadow">
            <div className="head">
                <span className="text-sm text-black">发帖提示</span>
            </div>
            <div className="body top-border">
                <ul>
                    <li>
                        <div className="title text-sm">主题标题</div>
                        <div className="description text-sm">
                            <p>请在标题中描述内容要点。如果一件事情在标题的长度内就已经可以说清楚，那就没有必要写正文了。</p>
                        </div>
                    </li>
                    <li>
                        <div className="title text-sm">正文</div>
                        <div className="description text-sm">
                            <p>可以在正文中为你要发布的主题添加更多细节。白塔阅读支持 <TextLink href={'https://help.github.com/articles/github-flavored-markdown'}>GitHub Flavored Markdown</TextLink> 文本标记语法。</p>
                            <p>在正式提交之前，你可以点击本页面左下角的“预览主题”来查看 Markdown 正文的实际渲染效果。</p>
                        </div>
                    </li>
                </ul>
            </div>
        </_PostingTipWidget>
    )
}