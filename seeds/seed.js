const sequelize = require('../config/connection');

const User = require('../models/User');
const Friend = require('../models/Friend');
const Favorite = require('../models/Favorite');

const userSeedData = require('./userSeedData.json');
const friendSeedData = require('./friendSeedData.json');
const favoriteSeedData = require('./favoriteSeedData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Friend.bulkCreate(friendSeedData);
  await Favorite.bulkCreate(favoriteSeedData);


  process.exit(0);
};

seedDatabase();
