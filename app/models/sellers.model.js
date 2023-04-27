module.exports = (sequelize, DataTypes) => {
   const Sellers = sequelize.define(
     "sellers",
     {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: DataTypes.STRING,
       },
       code: {
         type: DataTypes.STRING,
       }
     },
     {
       tableName: "sellers",
       timestamps: false,
     }
   );
 
   return Sellers;
 };
 