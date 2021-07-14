function withColor(color) {

    return function (props) {

        const style = Object.assign({}, props.style, { color })
        props = {
            ...props,
            style,
        }

        return (<span {...props}/>)
    }
}

const Text = {
    Red: withColor('#ef4444'),
    Black: withColor('#000'),
    Gray: withColor('#999'),
    LightGray: withColor('#ccc'),
}

export default Text