const { User } = require('../model');
const userData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "password12345"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "password12345"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "password12345"
    }
  ];
const seedUsers = async () => await User.bulkCreate(userData, {individualHooks: true});
module.exports = seedUsers;
  