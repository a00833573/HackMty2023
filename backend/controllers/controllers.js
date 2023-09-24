import client from '../database.js';
import pkg from 'jsonwebtoken'
import {SECRET} from '../constants/index.js'
const {sign} = pkg
client.connect();

export const login = async (req, res) => {
	let user = req.user
	let payload = {
		id: user.id,
		email: user.email,
	}
	try {
		const token = sign(payload, SECRET)
		return res.status(200).cookie('token', token, {httpOnly: true }).json({
			success: true, 
			message: 'Logged in succesfully'
		})	
	} catch (error) {
		return res.json({
			error: error.message
		})
	}
}

export const protectedRoute = async (req, res) => {
	try {
		return res.status(200).json({
			info: "protected info",
		})
	} catch (err) {
		console.log(err.message);
	}
};

export const logout = async (req, res) => {
	try {
		return res.status(200).clearCookie('token',{httpOnly: true }).json({
			succes: true, 
			message: 'Logged out succesfully'
		})	
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getIdEmpleado = async (req, res) => {
	try {
		const correo = req.query.correo
		const {rows} = await client.query('SELECT fun_empleado_id($1)', [correo])
		res.json(rows[0].fun_empleado_id)
	} catch (error) {
		return res.status(500).json({
			error: error.error.message,
		})
	}
}

export const getIdPerfil = async (req, res) => {
	try {
		const correo = req.query.correo
		const {rows} = await client.query('SELECT fun_empleado_id_perfil($1)', [correo])
		res.json(rows[0].fun_empleado_id_perfil)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getInfo = async (req, res) => {
	try {
		const idEmpleado = req.query.idempleado
		const {rows} = await client.query('SELECT fun_empleado_perfil($1)', [idEmpleado])
		res.json(rows[0].fun_empleado_perfil)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getAreas = async (req, res) => {
	try {
		const {rows} = await client.query('SELECT fun_areas()')
		res.json(rows[0].fun_areas)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getCursosEmpleados = async (req, res) => {
	try {
		const idEmpleado = req.query.idempleado
		const {rows} = await client.query('SELECT fun_empleado_cursos($1)', [idEmpleado])
		res.json(rows[0].fun_empleado_cursos)
	} catch (error) {
		return error.status(500).json({
			error: error.message,		
		})
	}
}

//VALE
export const getInfoJuego = async (req, res) => {
	try {
		const idEmpleado = req.query.idempleado
		const {rows} = await client.query('SELECT fun_empleado_juego($1)', [idEmpleado])
		res.json(rows[0].fun_empleado_juego)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getAvatars = async (req, res) => {
	try {
		const idEmpleado = req.query.idempleado
		const {rows} = await client.query('SELECT fun_empleado_avatars($1)', [idEmpleado])
		res.json(rows[0].fun_empleado_avatars)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const setMonedas = async (req, res) => {
  const infoMonedas = req.body.params
  const monedas = infoMonedas.monedas
  const idEmpleado = infoMonedas.idempleado

  try {
		await client.query("CALL sp_empleados_juego_update_monedas($1, $2)", [monedas, idEmpleado])
		res.send("Response received: " + req.body);
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const setPuntaje = async (req, res) => {
  const infoPuntaje = req.body.params
  const puntajeAlto = infoPuntaje.puntajealto
  const idEmpleado = infoPuntaje.idempleado

  try {
		await client.query("CALL sp_empleados_juego_update_puntaje($1, $2)", [puntajeAlto, idEmpleado])
		res.send("Response received: " + req.body);
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const addAvatar = async (req, res) => {
  const infoAvatar = req.body.params
  const idEmpleado = infoAvatar.idempleado
  const idAvatar = infoAvatar.idavatar

  try {
		await client.query("CALL sp_empleados_avatars_insert($1, $2)", [idEmpleado, idAvatar])
		res.send("Response received: " + req.body);
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getLeaderboard = async (req, res) => {
  try {
		const {rows} = await client.query("SELECT fun_leaderboard()")
		res.json(rows[0].fun_leaderboard)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

//JEANNETTE
export const getEmpleadosTodos = async (req, res) => {
	try {
		const {rows} = await client.query('SELECT * FROM empleados_info')
		res.json(rows)

	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const borrarUsuario = async(req,res) => {
	try {
		const idEmpleado = req.params.id
		await client.query("CALL sp_empleados_login_delete($1)", [idEmpleado])
		res.status(200).json({ message: 'Data deleted' });
	}
	catch(error) 
	{
		console.log(error);
		res.status(500).json({ message: 'Error deleting data' });
	};
}

export const actualizarUsuario = async (req, res) => {
	const {
		nombre,
		apellidopaterno,
		apellidomaterno,
		genero,
		fechanacimiento,
		pais,
    fotoperfil,
    fechainicio,
    fechagraduacion,
    idjefe
	  } = req.body; // Datos actualizados del usuario
	try {
		const idEmpleado = req.params.id
		await client.query("CALL sp_empleados_info_update($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
		[nombre, apellidopaterno, apellidomaterno, genero, fechanacimiento, pais, idEmpleado, fotoperfil, fechainicio, fechagraduacion, idjefe])
    res.status(200).json({ message: 'Data updated' });
	}
	catch (error) {
		console.error(error.message);
    	res.status(500).json({ message: 'Error al actualizar el usuario' });
	}
};

export const getInfoSingle = async (req, res) => {
	try {
		const idEmpleado = req.params.id
		const {rows} = await client.query('SELECT * from empleados_info WHERE idempleado=$1', [idEmpleado])
		res.json(rows)
	}
	catch (error) {
		console.error(error.message);
    	res.status(500).json({ message: 'Error al actualizar el usuario' });
	}
};

//Inserta en la base de datos un nuevo usuario en empleados_login
export const postUserLogin = async (req, res) => {
	const nuevoUsuario = req.body.params

	try {
		console.log(nuevoUsuario)
 		await client.query("CALL sp_empleados_login_insert($1, $2, $3)", [
			nuevoUsuario.correo,
			nuevoUsuario.contrasena,
			nuevoUsuario.idperfil
		]);
/* 		await client.query("INSERT INTO empleados_login (correo, contraseña, idperfil) VALUES ($1, $2, $3)", [
			nuevoUsuario.correo,
			nuevoUsuario.contrasena,
			nuevoUsuario.idperfil
		]); */
		return res.status(200).json({
			message: "Data saved",
		});
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		});
	}
};

//Inserta en la base de datos un nuevo usuario en empleados_login
export const postUserInfo = async (req, res) => {
	try {
		const infoNuevoUsuario = req.body.params	
		console.log(infoNuevoUsuario)
		await client.query("CALL sp_empleados_info_insert($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", [
			infoNuevoUsuario.nombre,
			infoNuevoUsuario.apellidopaterno,
			infoNuevoUsuario.apellidomaterno,
			infoNuevoUsuario.genero,
			infoNuevoUsuario.fechanacimiento,
			infoNuevoUsuario.pais,
    		infoNuevoUsuario.idempleado,
			infoNuevoUsuario.idarea,
      		infoNuevoUsuario.fotoperfil,
			infoNuevoUsuario.fechagraduacion,
			infoNuevoUsuario.idjefe
		]);
		res.send("Response received: " + req.body);
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			error: error.message,
		})
	}
};

//inserta curso jeannette
export const postCurso = async(req,res) => {
	const nombre = req.body["nombre"]; //expecting a json object
	const idarea = req.body["idarea"]; //expecting a json object
	//const img = req.body["img"]; //expecting a json object

	console.log("Nombre: " + nombre);
	console.log("ID Area: " + idarea);
	//console.log("Img: " + img);

	try {
		await client.query("INSERT INTO cursos (nombre , idarea) VALUES ($1,$2)",
    [nombre, idarea]);
    res.status(200).json({ message: 'Curso agregado' });

	} catch (error) {
		console.log(error.message)
	}
};

//get de rotaciones
export const getRotaciones = async (req, res) => {
	try {
		const idEmpleado = req.params.id

		const {rows} = await client.query('SELECT * FROM rotaciones WHERE idempleado = $1 ORDER BY fechainicio DESC'
		 ,[idEmpleado])
		res.json(rows)
		//console.log(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

//get de areas interes
export const getAreasInteres = async (req, res) => {
	try {
		const idEmpleado = req.params.id

		const {rows} = await client.query('SELECT * FROM areas_interes INNER JOIN areas ON areas_interes.idarea=areas.idarea WHERE idempleado=$1', [idEmpleado])
		res.json(rows)
		console.log(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const seleccionAreasInteres = async (req, res) => {
	const nombre = req.body.nombre;
	const idEmpleado = req.body.idempleado;
  
	try {
	  const IDAREA = await client.query('SELECT idarea FROM areas WHERE nombre=$1', [nombre]);
  
	  if (IDAREA.rows.length > 0) {
		const idArea = IDAREA.rows[0].idarea;
  
		// Verificar si ya existe un registro para el idEmpleado e idArea en areas_interes
		const existingRecord = await client.query(
		  'SELECT * FROM areas_interes WHERE idempleado = $1 AND idarea = $2',
		  [idEmpleado, idArea]
		);
  
		if (existingRecord.rows.length === 0) {
		  await client.query(
			'INSERT INTO areas_interes (idarea, idempleado) VALUES ($1, $2)',
			[idArea, idEmpleado]
		  );
  
		  res.status(200).json({ message: 'Checkbox insertado en la base de datos' });
		} else {
		  res.status(200).json({ message: 'El registro ya existe' });
		}
	  } else {
		res.status(404).json({ message: 'No se encontró el ID del área' });
	  }
	} catch (error) {
	  console.error('Error en la consulta SQL:', error);
	  res.status(500).json({ message: 'Error al actualizar el checkbox en la base de datos' });
	}
  };

  export const getInfoUsuarioJuego = async (req, res) =>
  {
	try {
		const idEmpleado = req.params.id

		const {rows} = await client.query('SELECT * FROM empleados_juego WHERE idempleado=$1', [idEmpleado])
		res.json(rows)
		console.log(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getRemuneracion = async (req, res) => {
	try {
		const idEmpleado = req.params.id
		const {rows} = await client.query('SELECT * FROM remuneraciones WHERE idempleado=$1', [idEmpleado])
		res.json(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message
		}
	)}
}

export const setRemuneracion = async (req, res) => {
	try {
		const infoRemuneracion = req.body

		const {rows} = await client.query('UPDATE remuneraciones SET sueldo = $1, ptu = $2, fondoahorro = $3 WHERE idempleado = $4', 
		[infoRemuneracion.sueldo, infoRemuneracion.ptu, infoRemuneracion.fondoAhorro, infoRemuneracion.idempleado])
		res.json(rows)
	} catch (error) {
		console.log(error.message)
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const setRotacion = async (req, res) => {
	try {
		const infoRotacion = req.body
		infoRotacion.performance = Number(infoRotacion.performance)
		infoRotacion.idempleado = Number(infoRotacion.idempleado)
		const {rows} = await client.query('UPDATE rotaciones SET potencial = $1, performance = $2 WHERE idempleado = $3 AND idarea = (SELECT idarea FROM empleados_info WHERE idempleado = $3)',
			[infoRotacion.potencial, Number(infoRotacion.performance), Number(infoRotacion.idempleado)]);
    res.json(rows)
		rows = await client.query('UPDATE empleados_info SET idarea = $1 WHERE idempleado = $2', 
			[infoRotacion.idarea, Number(infoRotacion.idempleado)])
    res.json(rows)
	} catch (error) {
		console.log(error.message)
  }
}

export const getFeedback = async (req, res) => {
	try {
		const idEmpleado = req.params.id

		const {rows} = await client.query('SELECT potencial, performance FROM rotaciones WHERE idempleado = $1',[idEmpleado])
		res.json(rows)
		//console.log(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}

export const getJefes = async (req, res) => {
	try {
		const {rows} = await client.query('SELECT idempleado, nombre, apellidopaterno, apellidomaterno FROM empleados_info NATURAL JOIN empleados_login el WHERE el.idperfil = 1')
		console.log(rows)
		res.json(rows)
	} catch (error) {
		return res.status(500).json({
			error: error.message,
		})
	}
}