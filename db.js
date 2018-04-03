const Sequelize = require('sequelize')
const db = new Sequelize('TodoList', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

db
  .authenticate()
  .then(() => {

  })
  .catch(err => {
    console.error("Déso, tu peux pas passer, t'arrive pas à te connecter", err);
  });

module.exports = db
