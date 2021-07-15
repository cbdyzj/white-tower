export function detectMobileDevice(ua = '') {
    if (!ua) {
        return false
    }
    return (ua.includes('Android') && ua.includes('Mobile'))
        || ua.includes('iPhone')
        || ua.includes('iPod')
}