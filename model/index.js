const User = require('./user');
const Image = require('./image');
const Entry = require('./entry');

User.hasMany(Image, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Image.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Entry.belongsTo(User, {
  foreignKey: 'user_id'
});


module.exports = { User, Image, Entry };
