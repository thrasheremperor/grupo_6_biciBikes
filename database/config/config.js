module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "grupo_6_biciBikes",
    host: "127.0.0.1",
    dialect: "mysql",
    seederStorage : "sequelize",
    port : 8889
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
