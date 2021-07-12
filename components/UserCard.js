import styled from 'styled-components'
import Image from 'next/image'
import Button from './Button'
import { getCurrency } from '../utils/currency'

const UserCardContainer = styled.div`
  border-radius: 2px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.06) 0 1px 2px 0;

  & > .user-data {

    padding: 10px;

    & > .user-avatar-name {
      display: flex;
      align-items: center;
      gap: 10px;

      & > a.user-avatar {
        display: flex;
      }

      & > .username {

        color: #4d5256;

        &:hover {
          color: #fff;
        }
      }
    }

    & > .user-favourite {
      margin-top: 10px;
      display: flex;

      & > .favourite {
        width: 33.3333%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        :nth-child(2) {
          border-left: 1px solid rgba(100, 100, 100, 0.4);
          border-right: 1px solid rgba(100, 100, 100, 0.4);
        }

        & > .count {
          color: #808080;
        }

        &:hover > .count {
          color: #385F8AFF;;
        }
      }
    }
  }

  & > .new-topic {
    padding: 10px;
  }

  & > .additional {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > .unread-message-count {
      color: #778087FF;

      &:hover {
        color: #4D5256FF;
      }
    }

    & > .balance-currency {
      font-size: 12px;
      line-height: 16px;
      padding: 5px 10px;
      border-radius: 20px;
      color: #666;
      text-shadow: 0 1px 0 #fff;
      background-color: #F5F5F5FF;

      &:hover {
        color: #000;
        background-color: #F9F9F9FF;
      }
    }
  }
`

export default function UserCard(props) {

    const userData = props.userData
    const balanceCurrency = getCurrency(userData.balance)

    return (
        <UserCardContainer>
            <div className="user-data">
                <div className="user-avatar-name">
                    <a className="user-avatar" href={'/user/' + userData.user}>
                        <Image src={userData.userAvatarUrl} width={48} height={48}/>
                    </a>
                    <Button className="username" as="a">{userData.user}</Button>
                </div>
                <div className="user-favourite">
                    <a className="favourite" href={'/my/nodes'}>
                        <span className="count text-base">{userData.nodeFavouriteCount}</span>
                        <span className="label text-light-gray text-sm">节点收藏</span>
                    </a>
                    <a className="favourite" href={'/my/topics'}>
                        <span className="count text-base">{userData.topicFavouriteCount}</span>
                        <span className="label text-light-gray text-sm">主题收藏</span>
                    </a>
                    <a className="favourite" href={'/my/following'}>
                        <span className="count text-base">{userData.followingCount}</span>
                        <span className="label text-light-gray text-sm">特别关注</span>
                    </a>
                </div>
            </div>

            <div className="new-topic top-border">
                <Button className="text-sm">创作新主题</Button>
            </div>

            <div className="additional top-border text-sm">
                <a className="unread-message-count" href={'/notifications'}>
                    {userData.unreadMessageCount} 条未读提醒
                </a>
                <a className="balance-currency" href={'/balance'}>
                    {balanceCurrency.pound} 金镑 {balanceCurrency.soli} 苏勒 {balanceCurrency.pound} 便士
                </a>
            </div>
        </UserCardContainer>
    )
}