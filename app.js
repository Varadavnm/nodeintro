const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3203;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mystore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a simple Mongoose model
const ExampleModel = mongoose.model('User', {
  name: String,
});

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to create a new document in the MongoDB collection
app.post('/create', async (req, res) => {
  try {
    const { name } = req.body;

    // Create a new document
    const newDocument = new ExampleModel({ name });

    // Save the document to the MongoDB collection
    await newDocument.save();

    res.status(201).json({ message: 'Document created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route to fetch all documents from the MongoDB collection
app.get('/fetch', async (req, res) => {
  try {
    // Fetch all documents
    const documents = await ExampleModel.find();
    const isPresent = documents.some(doc=>doc.name==='Varada')
    if(isPresent){
        res.json({message:'Name is present'})
    }

    else{
        res.json({message:'Name is not present'})
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
