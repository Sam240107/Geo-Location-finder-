const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/distance', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'distance.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`- index page:     http://localhost:${PORT}/`);
  console.log(`- distance page:  http://localhost:${PORT}/distance`);
});
