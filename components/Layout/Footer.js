import styled from 'styled-components'
import t from '../../i18n/t'

const FooterContainer = styled.footer`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .content {
    max-width: 1080px;
    min-height: 100px;
    margin: 0 auto;
    padding: 20px;
  }
`

export default function Footer(props) {

    return (
        <FooterContainer>
            <div className="content">
                <div className="text-sm">
                    <strong>{t.ABOUT}</strong>
                </div>
                <div style={{ marginTop: '10px' }} className="text-sm text-gray">
                    {t.COMMUNITY_OF_READERS}
                </div>
            </div>
        </FooterContainer>
    )
}