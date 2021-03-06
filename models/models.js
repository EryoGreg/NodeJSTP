const db = require('../db')
const Sequelize = require('sequelize')


const Users = db.define('users', {
    Name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      instanceMethods: {
        generateHash: function (password) {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
        },
        validPassword: function (password) {
          return bcrypt.compareSync(password, this.password)
        }
    }
})


const Todo = db.define('todos', {
    Message: {
        type: Sequelize.STRING
    },
    Completion: {
        type: Sequelize.BOOLEAN
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

Users.hasMany(Todo)

Todo.sync()
Users.sync()
db.sync()

module.exports = {Todo, Users}