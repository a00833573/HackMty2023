import {config} from 'dotenv'
config()    

export const PORT = process.env.PORT
export const SERVER_URL = process.env.SERVER_URL
export const CLIENT_URL = process.env.CLIENT_URL
export const SECRET = process.env.SECRET