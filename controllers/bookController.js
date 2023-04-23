const db = require('../models')
const Book = db.books


const addBook = async (req, res) => {
    try {
        let bookData = req.body;
        const book = await Book.create(bookData);
        res.status(200).send(book);
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while creating the book.");
    }
};


const postBook = async (req, res) => {

    try {
        let bookData = req.body;

        // if (Array.isArray(bookData)) {
        //   var book = await Book.bulkCreate(bookData);   same
        // }
        if (bookData.length > 1) {
            var book = await Book.bulkCreate(bookData)    // multipal  data insert
        }
        else {
            var book = await Book.create(bookData);
        }
        res.status(200).send(book);
    } catch (error) {
        res.status(500).send({ status: false, error: error.message })

    }

}



const getAllBook = async (req, res) => {
    try {
      let books = await Book.findAll({ limit: 5, offset: 2 });  // offset  mean skip
      res.status(200).send(books);
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while getting the books.");
    }
  };
  





  const getAllBookById = async (req, res) => {
    try {
      const id = req.params.id;

      const book = await Book.findOne({ where: { id  } });
  
      if (book) {
        res.status(200).send(book);
      } else {
        res.status(404).send("Book not found.");
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while getting the book.");
    }
  };
  


const updateBook = async (req, res) => {
    try {
      const id = req.params.id;
  
      const numUpdated = await Book.update(req.body, { where: { id } });   // isme update  0 aur 1 batata hai
  
      if (numUpdated === 0) {
        return res.status(404).send("Book not found.");
      }
  
      const book = await Book.findOne({ where: { id } });
      res.status(200).send(book);
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while updating the book.");
    }
  };
  



  const deleteBook = async (req, res) => {
    try {
      const id = req.params.id;
  
      const numDeleted = await Book.destroy({ where: { id } });
  
      if (numDeleted === 0) {
        return res.status(404).send("Book not found.");
      }
  
      res.status(200).send("Book is deleted!");
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while deleting the book.");
    }
  };
  




module.exports = { addBook, getAllBook, getAllBookById, updateBook, deleteBook, postBook }