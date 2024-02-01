import express from 'express';
import Sequelize from 'sequelize'; // Import Sequelize

const app = express();

app.get('/hello', (req, res) => {
    res.status(200).send('Hello world!');
})

// Start the server
const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});