import styled from 'styled-components'
import t from '../../i18n/t'

const _Nav = styled.nav`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    max-width: 1080px;
    margin: 0 auto;
    padding: 8px 20px;

    & > .links {
      display: flex;
      align-items: center;

      & > :not(:first-child) {
        margin-left: 10px;
      }
    }
  }
`

const Logo = styled.span`
  opacity: .75;
`

const NavLink = styled.a`
  color: #556;
  cursor: pointer;

  &:hover {
    color: #99a;
  }
`

export default function Nav(props) {
    return (
        <_Nav>
            <div className="body">
                <Logo className="font-medium text-lg" as="a" href={'/'}>
                    {t.WHITE_TOWER_READING}
                </Logo>
                <div className="links text-sm">
                    <NavLink href={'/'}>首页</NavLink>
                    <NavLink>阿尔贝鲁</NavLink>
                    <NavLink>我的书架</NavLink>
                    <NavLink>设置</NavLink>
                    <NavLink>登出</NavLink>
                </div>
            </div>
        </_Nav>
    )
}