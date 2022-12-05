const db = require('../models')

const Book = db.books

const addBook = async (req, res) => {

    let info = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        release_date: req.body.release_date,
       
    }
    const book = await Book.create(info)
    res.status(200).send(book)
  
}

const getAllBook = async (req, res) => {

    let products = await Book.findAll({ where: { purchased: true }})
    res.status(200).send(products)

}


const updateBook = async (req, res) => {

    let id = req.params.id

    const product = await Book.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}


const deleteBook = async (req, res) => {

    let id = req.params.id
    
    await Book.destroy({ where: { id: id }} )

    res.status(200).send('Book is deleted !')

}




module.exports = { addBook , getAllBook , updateBook , deleteBook}