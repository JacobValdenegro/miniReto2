// Importar los módulos necesarios
const express = require("express");
const mysql = require("mysql");

// Crear una instancia de Express
const app = express();
app.use(express.json()); // Configurar Express para analizar el cuerpo de la solicitud como JSON


// Crear una conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "reto"
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log("Conexión exitosa a la base de datos!");
});

// Crear una ruta de prueba para verificar la conexión
app.get("/", (req, res) => {
  connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
    if (err) throw err;
    res.send(`La solución es ${rows[0].solution}`);
  });
});



app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server side!"});
});

// Definir el endpoint para obtener la información de los usuarios
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM USERS', (err, rows, fields) => {
    if (err) {
      console.error('Error en la consulta: ' + err.stack);
      return;
    }
    console.log('Usuarios obtenidos con éxito');
    res.send(rows);
  });
});
  
// Definir el endpoint para actualizar la contraseña de un usuario
app.put('/actualiza/users', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const newPassword = req.body.newPassword;

  connection.query('SELECT * FROM USERS WHERE user = ? AND password = ?', [user, password], (err, result) => {
    if (err) {
      console.error('Error en la consulta: ' + err.stack);
      return;
    }
    if (result.length > 0) {
      connection.query('UPDATE USERS SET password = ? WHERE user = ?', [newPassword, user], (err, result) => {
        if (err) {
          console.error('Error en la consulta: ' + err.stack);
          return;
        }
        console.log('Contraseña actualizada con éxito');
        res.send(result);
      });
    } else {
      console.log('Usuario o contraseña incorrectos');
      res.status(401).send('Usuario o contraseña incorrectos');
    }
  });
});

// Definir el endpoint para eliminar un usuario
app.delete('/delete/users', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  connection.query('DELETE FROM USERS WHERE user = ? AND password = ?', [user, password], (err, result) => {
    if (err) {
      console.error('Error en la consulta: ' + err.stack);
      res.status(500).send('Error en la consulta: ' + err.message);
      return;
    }
    if (result.affectedRows === 0) {
      console.log('No se eliminó ningún usuario');
      res.status(404).send('Usuario no encontrado');
      return;
    }
    console.log('Usuario eliminado con éxito');
    res.send(result);
  });
});



// Definir el endpoint para agregar un usuario
app.post('/register/users', (req, res) => {
  const user = req.body.user;
  const password = req.body.password;

  // Verificar si los campos user y password están vacíos
  if (!user || !password) {
    res.status(400).send('Debe proporcionar un usuario y una contraseña');
    return;
  }

  connection.query('SELECT * FROM USERS WHERE user = ?', [user], (err, result) => {
    if (err) {
      console.error('Error en la consulta: ' + err.stack);
      return;
    }
    if (result.length > 0) {
      console.log('Usuario ya existe');
      res.status(409).send('El usuario ya existe');
    } else {
      connection.query('INSERT INTO USERS (user, password) VALUES (?, ?)', [user, password], (err, result) => {
        if (err) {
          console.error('Error en la consulta: ' + err.stack);
          return;
        }
        console.log('Usuario agregado con éxito');
        res.send(result);
      });
    }
  });
});


// Iniciar el servidor en el puerto 3001
app.listen(3001, () => {
  console.log("Servidor iniciado en el puerto 3001");
});
