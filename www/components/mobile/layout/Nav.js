import styled from 'styled-components'
import t from '../../../i18n/t'

const _Nav = styled.nav`
  background-color: #fff;
  padding: 5px 10px;
  min-height: 40px;
`


const Logo = styled.span`
  opacity: .75;
`

export default function Nav(props) {
    return (
        <_Nav className="flex items-center shadow">
            <Logo className="font-medium text-lg" as="a" href={'/'}>
                {t.WHITE_TOWER_READING}
            </Logo>
        </_Nav>
    )
}