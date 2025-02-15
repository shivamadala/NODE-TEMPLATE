const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Backend is running!'));
app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

