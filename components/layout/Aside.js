import UserCard from '../UserCard'

export default function Aside(props) {

    return (
        <>
            {props.userData && (<UserCard userData={props.userData}/>)}
        </>
    )
}