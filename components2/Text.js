import { getTextSizeClass } from '../utils/text'

function withColor(color) {

    return function (props) {
        const textSizeClass = getTextSizeClass(props.size)

        return (
            <span style={{ color }} className={`${textSizeClass} ${props.className || ''}`}>
                {props.children}
            </span>
        )
    }
}

const Text = {
    Black: withColor('#000'),
    Gray: withColor('#999'),
    LightGray: withColor('#ccc'),
}

export default Text