const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_SECRET,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT.toLowerCase(),
    pool: { max: parseInt(process.env.POOL_MAX) }
  }
);

async function connect(){
  try{
    await sequelize.authenticate();
    console.log(`[${process.env.DB_DIALECT}] - Database connected`);
  } catch(error){
    console.error(error);
    process.exit();
  }
}

connect();

module.exports = sequelize;