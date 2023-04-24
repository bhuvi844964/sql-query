
module.exports =  (sequelize, DataTypes)=>{

    const Book = sequelize.define("book", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Unknown'
      },
      price: {
        type: DataTypes.INTEGER
      },
      release_date: {
        type: DataTypes.DATEONLY
      }
       
     } , {timestamps: false}
     );
    
     return Book 
    }