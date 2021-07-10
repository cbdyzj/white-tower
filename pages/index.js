import Layout from '../components/Layout/Layout'
import t from '../i18n/t'
import styled from 'styled-components'

const TitleContainer = styled.div`
  position: relative;
  text-align: center;

  & > div.content {

    position: relative;
    top: 25vh;

    & > span.title {
      font-weight: 600;
      font-size: 72px;
      letter-spacing: -0.5px;
      background: linear-gradient(90deg, #f87171, #4ade80, #60a5fa);
      -webkit-background-clip: text;
      //noinspection CssInvalidPropertyValue
      background-clip: text;
      color: transparent;
    }

    & > span.subtitle {
      font-weight: 600;
      opacity: .7;
    }
  }
`

/**
 * 白塔阅读 - 首页
 */
export default function Index(props) {

    const title = `${t.WHITE_TOWER_READING} - ${t.HOME_PAGE}`

    return (
        <Layout title={title}>
            <TitleContainer>
                <div className="content">
                    <span className="title">{t.WHITE_TOWER_READING}</span>
                    <br/>
                    <span className="subtitle text-3xl">施工中...</span>
                </div>
            </TitleContainer>
        </Layout>
    )
}
