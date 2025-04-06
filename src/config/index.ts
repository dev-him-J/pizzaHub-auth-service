import { Config } from './../../node_modules/prettier/index.d'
// import { config } from 'dotenv'
import { config } from 'dotenv'

config()

const { PORT } = process.env
const Config = {
    port: PORT || 3000,
}
export default Config
