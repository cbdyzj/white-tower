import styled from 'styled-components'
import t from '../../i18n/t'

const _Footer = styled.footer`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .body {
    
    max-width: 1080px;
    min-height: 100px;
    margin: 0 auto;
    padding: 20px;

    & > :not(:first-child) {
      margin-top: 10px;
    }
  }
`

export default function Footer(props) {

    return (
        <_Footer>
            <div className="body">
                <div className="text-sm">
                    <strong>{t.ABOUT}</strong>
                </div>
                <div className="text-sm text-gray">
                    {t.COMMUNITY_OF_READERS}
                </div>
            </div>
        </_Footer>
    )
}