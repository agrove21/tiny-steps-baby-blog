const seedUsers = require('./userData');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");
    

    process.exit(0);
};

seedAll();