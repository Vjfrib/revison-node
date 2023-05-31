const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello Express app!')
});


app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.listen(3000, () => {
  console.log('server started');
});
