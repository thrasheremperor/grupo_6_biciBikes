module.exports = {
  development: {
    username: "root",
    password: "5398",
    database: "grupo_6_biciBikes",
    host: "127.0.0.1",
    dialect: "mysql",
    seederStorage : "sequelize"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
