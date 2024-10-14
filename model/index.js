const User = require('./user');
const Image = require('./image');
const Entry = require('./entry');
const Baby = require('./baby');

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

User.hasMany(Baby, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Baby.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Image, Entry, Baby };
