module.exports = (sequelize, DataTypes) => {
   const Products = sequelize.define(
     "products",
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
       tableName: "products",
       timestamps: false,
     }
   );
 
   return Products;
 };
 