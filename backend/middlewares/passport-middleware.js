import passport from "passport";
import { Strategy } from "passport-jwt";
import { SECRET } from "../constants/index.js";
import client from "../database.js";

const cookieExtractor = function (req){
    let token = null
    if(req && req.cookies) token = req.cookies['token']
    return token
}

const opts = {
    secretOrKey: SECRET,
    jwtFromRequest: cookieExtractor,
}

passport.use(
    new Strategy(opts, async ({id}, done) => {
        try {
            console.log(id)
            const {rows} = await client.query('SELECT idEmpleado FROM empleados_login WHERE idEmpleado = $1', [id])
            if(!rows.length) throw new Error('401 Not Authorized')
            let user = {id: rows[0].id, email: rows[0].email}
            done(null, user)
        } 
        catch (error) {
            console.log(error.message)
            done(null, false)
        }
    })
)