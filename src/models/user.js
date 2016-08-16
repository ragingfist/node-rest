/**
 * Created by bailey on 8/15/2016.
 */
export default function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task)
            }
        }
    });

    return User;
};
