const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    

    process.exit(0);
};

seedAll();

// module.exports = 
