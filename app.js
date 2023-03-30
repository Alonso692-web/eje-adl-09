//Declaraciones
const servidorHTTP = require('express');
const { request, response } = require('express/lib/express');
const app = servidorHTTP();
const port = process.env.PORT || 3000;
//Configuraciones - Respuestas para el cliente (Chrome, Firefox, Imsonia, Edge)
//get == Solicitamos un recurso en el servidor
app.get("/",(req,res)=>{
    res.send('Pagina principal. Servidor en Node.js con express');
}) //htdocs = publlic.html

app.get('*',(req,res)=>{
    res.send('404 | Pagina no encontrada');
})
/*
//Creamos un un recurso en el servidor
app.post
//Borramos un recurso en el servidor
app.delete
//Actualizamos un recurso en el servidor
app.put
*/
//Procesos
app.listen(port,()=>{
    console.log('Servidor corriendo en el puerto',port);
})