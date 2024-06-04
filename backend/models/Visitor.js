// models/Visitor.js
export default (sequelize, DataTypes) => {
    const Visitor = sequelize.define('Visitor', {
      count: DataTypes.INTEGER
    });
    return Visitor;
  };
  