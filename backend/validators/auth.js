import { body, check } from "express-validator";
import client from '../database.js'
import pkg from 'bcryptjs'
const {compare} = pkg

export const loginValidation = check('email').custom(async (val, {req}) => {
    const user = await client.query('SELECT * from empleados_login WHERE correo = $1', [val])
    if(!user.rows.length)
    {
        throw new Error('Contraseña o correo erróneo')
    }
    //const validPassword = await compare(req.body.password, user.rows[0].password)
    if(req.body.password !== user.rows[0].contraseña)
    {
        throw new Error('Contraseña o correo erróneo')
    }
    req.user = user.rows[0]
})
