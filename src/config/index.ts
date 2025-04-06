import { Config } from './../../node_modules/prettier/index.d'
// import { config } from 'dotenv'
import { config } from 'dotenv'

config()

const { PORT, NODE_ENV } = process.env
const Config = {
    PORT: PORT || 3000,
    NODE_ENV: NODE_ENV,
}
export default Config
