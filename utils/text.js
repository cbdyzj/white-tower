export function getTextSizeClass(size) {
    switch (size) {
        case 'xs':
            return 'text-xs'
        case 's':
            return 'text-sm'
        case 'm':
            return 'text-base'
        case 'l':
            return 'text-lg'
        case 'xl':
            return 'text-xl'
        default:
            return 'text-base'
    }
}