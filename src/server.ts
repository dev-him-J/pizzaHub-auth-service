import app from './app'
import Config from './config'

const startServer = () => {
    try {
        const PORT = Config.PORT
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}`),
        )
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()
