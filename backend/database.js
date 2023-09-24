import pkg from "pg";
const {Client} = pkg

//Inicializacion de la conexion de la base de datos
//Tienen que poner la contraseña que tienen en su propio postgress
const client = new Client ({
    user: "postgres",
    password: "123456",
    host: "localhost",
    port: 5432,
    database: "ternium_database",
})
export default client;