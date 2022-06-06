module.exports = {
  HOST: "mysqldb-artistproject.cnanowmbe9ky.us-east-1.rds.amazonaws.com",
  USER: "rootadmin",
  PASSWORD: "Kolipaka*artist*123",
  DB: "mydb3",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};