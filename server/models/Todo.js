module.exports = function (Sequelize, DataTypes) {
    return Sequelize.define(
        "todo",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            tableName: "todo",
            freezeTableName: true,
            timestamps: false,
        }
    );
};