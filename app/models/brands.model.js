module.exports = (sequelize, DataTypes) => {
   const Brands = sequelize.define(
     "brands",
     {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       name: {
         type: DataTypes.STRING,
       },
       codeColor: {
         type: DataTypes.STRING,
       }
     },
     {
       tableName: "brands",
       timestamps: false,
     }
   );
 
   return Brands;
 };
 