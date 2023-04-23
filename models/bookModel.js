
module.exports =  (sequelize, DataTypes)=>{

    const Book = sequelize.define("book", {
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        author: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "Bhuvnesh Sharma"
        },
        price: {
            type: DataTypes.INTEGER
        },
        release_date: {
          type: DataTypes.DATEONLY,
        }
       
     } , {timestamps: false}
     );
    
     return Book 
    }