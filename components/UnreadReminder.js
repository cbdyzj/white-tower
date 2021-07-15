import styled from 'styled-components'

const _UnreadReminder = styled.a`
  display: block;
  text-align: center;
  color: #532b17;
  padding: 5px 15px 4px;
  border-radius: 2px;
  background-color: #fc0;
  text-shadow: 0 1px 1px rgba(255, 255, 255, .6);
  border: 1px solid rgba(200, 150, 0, .8);
  cursor: pointer;

  &:hover {
    background-color: #ffdf00;
    color: #402112;
    text-shadow: 0 1px 1px rgba(255, 255, 255, .7);
    border: 1px solid #c89600;
  }

  &:active {
    background-color: #fb0;
    color: #402112;
    text-shadow: 0 1px 1px rgba(255, 255, 255, .7);
    text-decoration: none;
    cursor: pointer;
    border: 1px solid #c89600;
  }
`

export default function UnreadReminder(props) {
    return (
        <_UnreadReminder href={props.href} className="text-sm">
            {props.count} 条未读提醒
        </_UnreadReminder>
    )
}

const _NoUnread = styled.a`
  display: block;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #999;
  }
`

export function NoUnread(props) {
    return (
        <_NoUnread  href={props.href} className="text-sm" href={props.href}>
            0 条未读提醒
        </_NoUnread>
    )
}

