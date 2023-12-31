import { validationResult } from "express-validator";

export const validationMiddleware = (req, res, next) => {
    let errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.json({
            errors: errors.array(),
        })
    }
    
    next()
}