var mongoose = require('mongoose');

module.exports = function (url) {
    mongoose.connect(url);

    mongoose.connection.on('connected', function () {
        console.log('Mongoose conectado em ' + url);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose desconectado de ' + url);
    });
    mongoose.connection.on('error', function (error) {
        console.log('Erro na conexão  ' + error);
    });

    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose!	Desconectado	pelo	término	da	aplicação');
            //	0	indica	que	a	finalização	ocorreu	sem	erros
            process.exit(0);
        });
    });
}