const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Simple health check
app.get('/', (req, res) => {
  res.json({ status: 'Alamo Grades backend running' });
});

// Example grading endpoint
app.post('/grade', (req, res) => {
  const { cardName } = req.body;

  // Placeholder grading logic
  const result = {
    cardName,
    centering: 9,
    corners: 8,
    edges: 9,
    surface: 8,
    finalGrade: 8.5
  };

  res.json(result);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));



