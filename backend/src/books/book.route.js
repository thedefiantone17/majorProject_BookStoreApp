const express = require('express');
const router = express.Router();
const Book = require('./book.model'); // Import the Book model

// POST: whenwe want to submit something in frontend to db
// GET: when we want to get something to frontend from db
// PUT: when we want to update something 
// DELETE: when we want to delete something 

// post a BOOK
router.post('/create-book', async (req, res) => {
    console.log(req.body);
    try {
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).json({ message: 'Book created successfully' });
        
    } catch (error) {
        console.error("error creating book",error);
        res.status(500).json({ message: 'Failed creating book' });
    }
});

module.exports = router;