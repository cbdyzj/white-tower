import styled from 'styled-components'
import t from '../../i18n/t'

const NavContainer = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 48px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 10px 20px;

    & > .nav-link {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`

const WhiteTower = styled.span`
  opacity: .75;
`

export default function Nav(props) {
    return (
        <NavContainer>
            <div className="nav-content">
                <WhiteTower className="font-medium text-lg" as="a" href={'/'}>
                    {t.WHITE_TOWER_READING}
                </WhiteTower>
                <div className="nav-link text-base">
                    <span>首页</span>
                    <span>阿尔贝鲁</span>
                    <span>我的书架</span>
                    <span>设置</span>
                    <span>登出</span>
                </div>
            </div>
        </NavContainer>
    )
}