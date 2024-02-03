const {BookModel} = require("../Models/book.model.js")

const deleteBook = async(req,res) => {
      const {id} = req.params;
      try {
            await BookModel.findByIdAndDelete(id)
            res.status(200).json({success : true, message : 'Successfully deleted'})
      } catch (error) {
            res.status(400).json({success : false, message : 'Failed to delete'})
      }
}
// const updateBook = async (req, res) => {
//       const { id } = req.params;
//       try {
//         let book = await BookModel.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json({ success: true, message: 'Successfully updated', data: book });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//     }
    


 const addBook = async(req,res) => {     
      try {
            const newBook= new BookModel(req.body);
            await newBook.save();
            res.status(200).json({success : true, message : 'Successfully added new book', data : newBook})
      } catch (error) {
            res.status(400).json({success : false, message : error.message})
      }
}

 const getSingleBook = async(req,res) => {
      const {id} = req.params;
      try {
            const Book = await BookModel.findById(id)
            res.status(200).json({success : true, message : 'Book found', data : Book})
      } catch (error) {
            res.status(404).json({success : false, message : 'No Book found'})
      }
}


const getAllBooks = async (req, res) => {
  const { title,author, old, new: isNew, genre, sort } = req.query;

  try {
    let books;

    if (old) {
      // Fetch books created 10 minutes ago and earlier
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      books = await BookModel.find({ createdAt: { $lte: tenMinutesAgo } });
    } else if (isNew) {
      // Fetch books created within the last 10 minutes
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
      books = await BookModel.find({ createdAt: { $gte: tenMinutesAgo } });
    } else {
      const searchQuery = {};

      // Add genre filtering
      if (genre) {
        searchQuery.genre = { $regex: new RegExp(genre, 'i') };
      }

      // Add title filtering (case-insensitive)
      if (title) {
        searchQuery.title = { $regex: new RegExp(title, 'i') };
      }

      // Add author filtering (case-insensitive)
      if (author) {
        searchQuery.author = { $regex: new RegExp(author, 'i') };
      }

      let sortOrder;
      if(sort) {
        if(sort == 'asc') {
          sortOrder = 1
        }
        else if (sort == 'desc') {
          sortOrder = -1
        }
      }
      if(sortOrder) {

        books = await BookModel.find(searchQuery).sort({ publicationYear: sortOrder });
      }else {
        books = await BookModel.find(searchQuery);

      }
    }

    if (books.length === 0) {
      res.status(200).json({ success: true, message: 'No Books found' });
    } else {
      res.status(200).json({ success: true, message: 'Books found', data: books });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};




module.exports = {
      addBook, deleteBook, getAllBooks, getSingleBook
}