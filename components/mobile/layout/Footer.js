import styled from 'styled-components'

const _Footer = styled.div`
  background-color: #fff;
  padding: 5px 15px;
  min-height: 30px;
`
export default function Footer(props) {
    return (
        <_Footer className="flex justify-between text-sm text-gray">
            <span>© 2021 白塔阅读</span>
            <span className="font-bold">关于</span>
        </_Footer>
    )
}