// Import models
const User = require('./User');
const Favorites = require('./Favorites');
const Friend = require('./Friend');

User.hasMany(Favorites, {
    foreignKey: 'user_id',
});

User.hasMany(Friend, {
    foreignKey: 'user_id',
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id',
});

Friend.belongsTo(User, {
    foreignKey: 'user_id',
})



module.exports = { User, Favorites, Friend };