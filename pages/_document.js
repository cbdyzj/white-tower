import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class WhiteTowerDocument extends Document {

    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()

        try {
            const _renderPage = ctx.renderPage
            ctx.renderPage = function () {
                return _renderPage({
                    enhanceApp(App) {
                        return function (props) {
                            return sheet.collectStyles(<App {...props} />)
                        }
                    },
                })
            }

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}