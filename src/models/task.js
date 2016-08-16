/**
 * Created by bailey on 8/15/2016.
 */
export default function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        title: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                Task.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Task;
};
