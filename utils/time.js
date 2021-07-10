export function getTimeDurationText(time) {
    const date = new Date(time)
    const now = new Date()
    const duration = Math.round((now.getTime() - date.getTime()) / 1000)
    if (duration < 60) {
        return '刚刚'
    }
    if (duration < 60 * 60) {
        const minutes = Math.round(duration / 60)
        return minutes + ' 分钟前'
    }
    if (duration < 60 * 60 * 24) {
        const hours = Math.trunc(duration / (60 * 60))
        const minutes = Math.round((duration - (hours * 60 * 60)) / 60)
        return `${hours} 小时 ${minutes} 分钟前`
    }
    const days = Math.round(duration / (60 * 60 * 24))
    return days + '天前'
}