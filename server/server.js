const path = require('path');
const express = require('express');
const app = express();
const publichPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 8080;

app.use(express.static(publichPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publichPath, 'index.html'));
});

app.listen(port, () => {
   console.log('Server is up');
});