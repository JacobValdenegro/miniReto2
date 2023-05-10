# miniReto2

pagina:   http://3.142.68.198:3000/

GET /api/hello: Retorna un mensaje de saludo desde el servidor.

GET /users: Obtiene la lista de usuarios almacenados en la base de datos.

PUT /actualiza/users: Actualiza la contraseña de un usuario existente. Debes proporcionar los siguientes parámetros en el cuerpo de la solicitud (en formato JSON):
  user: el nombre de usuario.
  password: la contraseña actual.
  newPassword: la nueva contraseña.
  
DELETE /delete/users: Elimina un usuario existente. Debes proporcionar los siguientes parámetros en el cuerpo de la solicitud (en formato JSON):
  user: el nombre de usuario.
  password: la contraseña del usuario.

POST /register/users: Agrega un nuevo usuario a la base de datos. Debes proporcionar los siguientes parámetros en el cuerpo de la solicitud (en formato JSON):
  user: el nombre de usuario.
  password: la contraseña del usuario.
