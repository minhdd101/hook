const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/api/survey/started', (req, res) => {
  const { surveyId } = req.query;

  console.log(`${surveyId} has started`);

  res.status(204).send();
})

app.get('/api/survey/completed', (req, res) => {
  const { surveyId } = req.query;

  console.log(`${surveyId} has completed`);

  res.status(204).send();
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});