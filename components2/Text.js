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
    Gray: withColor('#999999'),
    LightGray: withColor('#cccccc'),
}

export default Text