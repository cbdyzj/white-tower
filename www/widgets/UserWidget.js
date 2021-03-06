import styled from 'styled-components'
import Avatar from '../components/Avatar'
import TextLink from '../components/TextLink'

const _UserWidget = styled.div`
  background-color: #fff;
  min-width: 270px;
  border-radius: 2px;

  & > .username {
    padding: 10px;

    & > .avatar {
      padding-right: 10px;
    }
  }

  & > .favorites {
    padding: 0 10px 10px;

    & > a {
      width: 33.3333%;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      & > .favorite-count {
        color: #808080;
      }

      &:hover > .favorite-count {
        color: #385f8a;
      }

      &:not(:first-child) {
        border-left: 1px solid rgba(100, 100, 100, 0.4);
      }
    }
  }

  & > .create-topic {
    padding: 10px;
  }

  & > .additional {
    padding: 10px;
  }
`

export default function UserWidget(props) {

    const userData = props.userData

    return (
        <_UserWidget className="shadow">
            <div className="username flex items-center">
                <div className="avatar">
                    <Avatar href={'/'} src={userData.userAvatarUrl} size="m"/>
                </div>
                <TextLink className="text-base">{userData.username}</TextLink>
            </div>
            <div className="favorites flex">
                <a>
                    <span className="favorite-count text-base">{userData.nodeFavouriteCount}</span>
                    <span className="text-light-gray text-sm">节点收藏</span>
                </a>
                <a>
                    <span className="favorite-count text-base">{userData.topicFavouriteCount}</span>
                    <span className="text-light-gray text-sm">主题收藏</span>
                </a>
                <a>
                    <span className="favorite-count text-base">{userData.followingCount}</span>
                    <span className="text-light-gray text-sm">特别关注</span>
                </a>
            </div>
            <div className="create-topic top-border">
                <TextLink href={'/new'} className="text-sm">创作新主题</TextLink>
            </div>
            <div className="additional top-border">
                <TextLink className="text-sm">{userData.unreadMessageCount} 条未读提醒</TextLink>
            </div>

        </_UserWidget>
    )
}