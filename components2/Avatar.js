import styled from 'styled-components'
import Image from 'next/image'

const _Avatar = styled.a`
  display: inline-block;
  font-size: 0;
  border-radius: 2px;
`

function getSize(size) {
    switch (size) {
        case 's':
            return 36
        case 'm':
            return 48
        case 'l':
            return 72
        default:
            return 48
    }
}

export default function Avatar(props) {

    const size = getSize(props.size)

    return (
        <_Avatar href={props.href}>
            <Image src={props.src} width={size} height={size} alt=""/>
        </_Avatar>
    )
}