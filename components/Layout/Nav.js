import styled from 'styled-components'
import t from '../../i18n/t'

const NavContainer = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .content {
    display: flex;
    align-items: center;
    min-height: 44px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 10px 20px;
  }
`

const WhiteTowerText = styled.span`
  font-weight: 500;
  opacity: .75;
  cursor: pointer;
`

export default function Nav(props) {
    return (
        <NavContainer>
            <div className="content">
                <WhiteTowerText as="a" href={'/'}>
                    {t.WHITE_TOWER_READING}
                </WhiteTowerText>
            </div>
        </NavContainer>
    )
}