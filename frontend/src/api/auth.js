import axios from 'axios'
axios.defaults.withCredentials = true

export async function onLogin(loginData) {
    return await axios.post('http://localhost:4000/api/login', loginData)
}

export async function onLogout(){
    return await axios.get('http://localhost:4000/api/logout')
}

export async function getIdEmpleado(correo){
    return await axios.get('http://localhost:4000/api/idEmpleado', {params: correo})
}

export async function getIdPerfil(correo){
    return await axios.get('http://localhost:4000/api/idPerfil',{params: correo})
}

export async function getInfoEmpleado(idEmpleado){
    return await axios.get('http://localhost:4000/api/infoEmpleado', {params: idEmpleado})
}

export async function getAreas(){
    return await axios.get('http://localhost:4000/api/areas')
}

export async function getCursosEmpleado(idEmpleado){
    return await axios.get('http://localhost:4000/api/cursosEmpleado', {params: idEmpleado})
}

//VALE
export async function getInfoJuego(idEmpleado){
  return await axios.get('http://localhost:4000/api/getInfoJuego', {params: idEmpleado})
}

export async function getAvatars(idEmpleado){
  return await axios.get('http://localhost:4000/api/getAvatars', {params: idEmpleado})
}

export async function setMonedas(infoMonedas){
  return await axios.post('http://localhost:4000/api/setMonedas',{params: infoMonedas});
}

export async function setPuntaje(infoPuntaje){
  return await axios.post('http://localhost:4000/api/setPuntaje',{params: infoPuntaje});
}

export async function addAvatar(infoAvatar){
  return await axios.post('http://localhost:4000/api/addAvatar',{params: infoAvatar});
}

export async function getLeaderboard(){
  return await axios.post('http://localhost:4000/api/getLeaderboard');
}

//JEANNETTE
export async function getEmpleadosTodos()
{
    return await axios.get('http://localhost:4000/api/empleados');
}

export async function nuevoEmpleadoInfo(infoNuevoEmpleado){
    return await axios.post('http://localhost:4000/api/adduserInfo',{params: infoNuevoEmpleado});
}

export async function nuevoEmpleado(infoEmpleado){
    return await axios.post('http://localhost:4000/api/adduser',{params: infoEmpleado});
}

export async function borrarUsuario(idEmpleado){
    return await axios.delete(`http://localhost:4000/api/empleados/delete/${idEmpleado}`);
}

export async function actualizarUsuario(idempleadoinfo,data) //aquii estoy trabajando
{
    return await axios.put(`http://localhost:4000/api/data/edit/${idempleadoinfo}`,data);
}

export async function getSingleUsuario(idempleadoinfo)
{
    return await axios.get(`http://localhost:4000/api/data/get/${idempleadoinfo}`);
}

export async function nuevoCurso(infoNuevoCurso){
    return await axios.post('http://localhost:4000/api/addcurso',infoNuevoCurso);
}

export async function getRotaciones(idempleado)
{
    return await axios.get(`http://localhost:4000/api/data/getRotaciones/${idempleado}`);
}

export async function getAreasInteres(idempleado)
{
    return await axios.get(`http://localhost:4000/api/data/getAreasInteres/${idempleado}`,{params: {idempleado}});
}

export async function getRemuneracion(idempleado)
{
    return await axios.get(`http://localhost:4000/api/data/get/remuneraciones}`,{params: idempleado});
}

export async function actualizarCheckboxEnBaseDeDatos(nombre,idempleado) 
{
    return await axios.post(`http://localhost:4000/api/actualizarCheckbox`,{nombre,idempleado});
}

export async function getInfoUsuarioJuego(idempleado)
{
    return await axios.get(`http://localhost:4000/api/data/getInfoJuego/${idempleado}`);
}

export async function getFeedback(idempleado)
{
    return await axios.get(`http://localhost:4000/api/data/getFeedback}`,{params: idempleado});
}