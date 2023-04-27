module.exports = (sequelize, DataTypes) => {
    const Vendors = sequelize.define(
      "vendors",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        alias: {
          type: DataTypes.STRING,
        },
        dni: {
          type: DataTypes.INTEGER,
        },
        type: {
          type: DataTypes.INTEGER,
        },
      },
      {
        tableName: "vendors",
        timestamps: false,
      }
    );
  
    return Vendors;
  };
  