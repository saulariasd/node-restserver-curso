//  ================================
//              PORT
//  ================================ 

process.env.PORT = process.env.PORT || 3000;


//  ================================
//             ENTORNO
//  ================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



//  ================================
//      Venciminento del token
//  ================================
// 60 segungos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//  ================================
//      SEED de autenticacion
//  ================================
process.env.SEED = process.eventNames.SEED || 'este-es-el-seed-de-desarrollo';



//  ================================
//                 BD
//  ================================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;