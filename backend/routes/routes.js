import { Router } from "express";
import { login, getIdEmpleado, getIdPerfil,
        protectedRoute, logout, getInfo, getAreas, getCursosEmpleados,
        getInfoJuego, getAvatars, setMonedas, setPuntaje, addAvatar, getLeaderboard,
        postUserLogin, postUserInfo, borrarUsuario, getEmpleadosTodos, postCurso,
        getRotaciones, getAreasInteres, actualizarUsuario, getInfoSingle, seleccionAreasInteres,
        getInfoUsuarioJuego, getRemuneracion, setRemuneracion, setRotacion, getFeedback, getJefes} from "../controllers/controllers.js";

import { loginValidation } from '../validators/auth.js'
import { validationMiddleware } from "../middlewares/validations-middleware.js";
import { userAuth } from "../middlewares/auth-middleware.js";
const router = Router();

router.post('/login', loginValidation, validationMiddleware, login)
router.get('/idEmpleado', getIdEmpleado);
router.get('/idPerfil', getIdPerfil);

router.get('/protected', userAuth, protectedRoute)
router.get('/logout' , logout)
router.get('/infoEmpleado', getInfo);
router.get('/areas', getAreas);
router.get('/cursosEmpleado', getCursosEmpleados);

//VALE
router.get('/getInfoJuego', getInfoJuego);
router.get('/getAvatars', getAvatars);
router.post('/setMonedas', setMonedas);
router.post('/setPuntaje', setPuntaje);
router.post('/addAvatar', addAvatar);
router.post('/getLeaderboard', getLeaderboard);

//JEANNETTE
router.post('/adduser', postUserLogin);  //post para el primer forms
router.post('/adduserInfo', postUserInfo);  //post para el primer forms
router.delete('/empleados/delete/:id',borrarUsuario);
router.get('/empleados',getEmpleadosTodos);
router.post('/addcurso',postCurso);
router.get('/data/getRotaciones/:id',getRotaciones);
router.get('/data/getAreasInteres/:id',getAreasInteres);
router.post('/actualizarCheckbox',seleccionAreasInteres);
router.get('/data/getInfoJuego/:id',getInfoUsuarioJuego);
//para el update
router.put('/data/edit/:id',actualizarUsuario);
router.get('/data/get/:id',getInfoSingle);
router.get('/data/get/remuneracion/:id', getRemuneracion)
router.put('/data/update/remuneracion', setRemuneracion)
router.put('/data/update/rotacion', setRotacion)

router.get('/data/getFeedback/:id',getFeedback);
router.get('/get/jefes', getJefes);

export default router