const { DataTypes } = require("sequelize");

const user = (db) => {
	db.User = db.define(
		"user",
		{
			id: {
				primaryKey: true,
				type: DataTypes.UUID,
				allowNull: false,
			},
			notificationsEnabled: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			repliesEnabled: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			mentionsEnabled: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
		},
		{
			paranoid: false,
			updatedAt: false,
		}
	);
	db.User.hasMany(db.Device);
	db.Device.belongsTo(db.User);
	db.User.hasMany(db.UserPushSubscription);
	db.UserPushSubscription.belongsTo(db.User);
};

export default user;
