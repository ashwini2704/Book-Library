const express = require('express');
const { addBook,deleteBook, getAllBooks, getSingleBook} = require('../Controllers/book.controller.js');
const {auth} = require('../middlewares/auth.middleware.js');
const { checkCreatorRole } = require('../middlewares/create.middleware.js');

const bookRouter = express.Router();

bookRouter.get('/',auth,getAllBooks);
bookRouter.post('/',checkCreatorRole,addBook);
bookRouter.get('/:id',auth,getSingleBook);
bookRouter.delete('/:id',checkCreatorRole,deleteBook);
// bookRouter.patch('/:id',checkCreatorRole,updateBook);


module.exports = {
      bookRouter
}