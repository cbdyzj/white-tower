import styled from 'styled-components'
import Avatar from '../components/Avatar'
import TextLink from '../components/TextLink'

const _UserWidget = styled.div`
  width: 270px;

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
    return (
        <_UserWidget className="shadow">
            <div className="username flex items-center">
                <div className="avatar">
                    <Avatar href={'/'} src={'/white-tower.svg'} size="m"/>
                </div>
                <TextLink className="text-base">阿尔贝鲁</TextLink>
            </div>
            <div className="favorites flex">
                <a>
                    <span className="favorite-count text-base">2</span>
                    <span className="text-light-gray text-sm">节点收藏</span>
                </a>
                <a>
                    <span className="favorite-count text-base">36</span>
                    <span className="text-light-gray text-sm">主题收藏</span>
                </a>
                <a>
                    <span className="favorite-count text-base">0</span>
                    <span className="text-light-gray text-sm">特别关注</span>
                </a>
            </div>
            <div className="create-topic top-border">
                <TextLink className="text-sm">创作新主题</TextLink>
            </div>
            <div className="additional top-border">
                <TextLink className="text-sm">0 条未读提醒</TextLink>
            </div>

        </_UserWidget>
    )
}