// Import models
const User = require('./User');
const Favorites = require('./Favorites');
const Friends = require('./Friends');

User.hasMany(Favorites, {
    foreignKey: 'user_id',
});

User.hasMany(Friends, {
    foreignKey: 'user_id',
});

Favorites.belongsTo(User, {
    foreignKey: 'user_id',
});

Friends.belongsTo(User, {
    foreignKey: 'user_id',
})



module.exports = { User, Favorites, Friends };