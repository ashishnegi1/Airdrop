import express from 'express';
import bodyParser from 'body-parser';
import airdrop from './airdrop.js';

const app = express();
const port = 9000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Handle POST request
app.post('/airdrop', async (req, res) => { // Make this handler async
    const data = req.body;
    console.log('Received data:', data);

    try {
        // Process the data using the external script
        const signature = await airdrop(data);
        
        // Send a response back
        res.status(200).send({ message: 'Data processed successfully', processedData: signature });
    } catch (error) {
        // Handle any errors that occur during processing
        res.status(500).send({ message: 'An error occurred while processing the data', error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
