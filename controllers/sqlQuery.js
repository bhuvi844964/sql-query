const db = require('../models')
const Book = db.books
const { Sequelize , Op } = require('sequelize');


module.exports.getAllQuery = async (req, res) => {
  try {
    let books = await Book.findAll({
        attributes: ['title', 'id', ['author', 'baz']],
        attributes: { exclude: ['title' , "release_date"] },
        // where: {
        //     [Op.and]: [
        //       { id: 12 },
        //       { author: "arjun" }
        //     ]
        //   }
        where: {
            id: { 
                [Op.eq]: 8,  
            }
        }



    })

    res.status(200).json({ books });
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while getting the books.");
  }
};


  


  // offset  =  skip ki tarah kam karta hai
  // attributes = select ki tarah kam karta hai
  // attributes: ['title', ['author' , 'baz'] ]    = array me under As name likhte hai
  //  attributes: { exclude: ['author'] },   = remove this part
  // order  = ass and dece order mee