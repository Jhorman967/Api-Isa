module.exports = (sequelize, DataTypes) => {
   const Orders = sequelize.define(
     "products",
     {
       id: {
         type: DataTypes.INTEGER,
         primaryKey: true,
         autoIncrement: true,
       },
       title : {
         type: DataTypes.STRING,
       },
       vendor: {
         type: DataTypes.STRING,
       },
       contact: {
         type: DataTypes.STRING,
       },
       location: {
         type: DataTypes.STRING,
       },
       product: {
         type: DataTypes.STRING,
       },
       price:{
          type: DataTypes.STRING,
       },
       fob: {
         type: DataTypes.STRING,
       },
       start: {   // pudate  inicial
         type: DataTypes.DATE,
       },
       end: {   // pudate  final
        type: DataTypes.DATE,
       },
       droplocation: {
         type: DataTypes.STRING,
       },
       color: {
         type: DataTypes.STRING,
       },
       consignee: {
         type: DataTypes.STRING,
       }
     },
     {
       tableName: "orders",
       timestamps: false,
     }
   );
 
   return Orders;
 };
 