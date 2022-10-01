// Import models
const User = require('./User');
const Favorite = require('./Favorite');
const Friend = require('./Friend');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
});

User.hasMany(Friend, {
    foreignKey: 'friend_id',
});

Favorite.belongsTo(User, {
    foreignKey: 'user_id',
});

Friend.belongsTo(User, {
    foreignKey: 'friend_id',
})



module.exports = { User, Favorite, Friend };