const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('ABDM M1 API is running...');
});

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
