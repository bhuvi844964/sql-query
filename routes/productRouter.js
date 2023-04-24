const bookController = require("../controllers/bookController")
const customerController = require("../controllers/customerController")
const sellerController = require("../controllers/sellerController")
const sqlQuery = require("../controllers/sqlQuery")

// router
const router = require('express').Router()

// book api


router.post('/addBook', bookController.addBook)
router.post('/postBook', bookController.postBook)
router.get('/getAllBookById/:id', bookController.getAllBookById)
router.put('/update/:id', bookController.updateBook)
router.delete('/delete/:id', bookController.deleteBook)

router.get('/getAllQuery', sqlQuery.getAllQuery)


// customer api 
router.post('/addCustomer/:id', customerController.addCustomer)
router.get('/allCustomer', customerController.getAllCustomer)
router.put('/updateCustomer/:id', customerController.updateCustomer)
router.delete('/deleteCustomer/:id', customerController.deleteCustomer)



// seller api
router.post('/addSeller', sellerController.addSeller)
router.get('/allSeller', sellerController.getAllSeller)
router.put('/updateSeller', sellerController.updateSeller)
router.delete('/deleteSeller', sellerController.deleteSeller)


module.exports = router