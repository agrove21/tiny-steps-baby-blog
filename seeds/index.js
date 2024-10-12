const { User } = require('../model');
// const seedUsers = require('./userData');
const userData = require('./userData.json')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {individualHooks: true, returning: true});
    console.log("\n----- USERS SEEDED -----\n");
    

    process.exit(0);
};

seedAll();