const sequelize = require('../config/connection');

const User = require('../models/User');
const Friend = require('../models/Friend');
const Favorites = require('../models/Favorites');

const userSeedData = require('./userSeedData.json');
const friendSeedData = require('./friendSeedData.json');
const favoritesSeedData = require('./favoritesSeedData.json');

const seedDatabase = async () => {

  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData);
  await Friend.bulkCreate(friendSeedData);
  await Favorites.bulkCreate(favoritesSeedData);

  process.exit(0);
};

seedDatabase();
