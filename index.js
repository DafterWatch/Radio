const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);

const PORT = 3000;
app.set('port',process.env.PORT || PORT);

app.use(express.static(path.join(__dirname,'public')));

http.listen(app.get('port'), ()=>{
    console.log('Aplicación corriendo en puerto:',app.get('port'));
});