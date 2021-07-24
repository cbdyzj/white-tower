function detectMobileDevice(ua = '') {
    if (!ua) {
        return false
    }
    return (ua.includes('Android') && ua.includes('Mobile'))
        || ua.includes('iPhone')
        || ua.includes('iPod')
}

export function withDeviceDetection(getServerSideProps) {
    return async (ctx) => {
        const ua = ctx.req.headers['user-agent']
        const isMobile = detectMobileDevice(ua)

        const serverSideProps = await getServerSideProps(ctx)
        const _props = serverSideProps.props ?? {}
        return {
            ...serverSideProps,
            props: {
                ..._props,
                isMobile
            }
        }
    }
}