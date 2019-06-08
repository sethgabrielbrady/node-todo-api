const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.route('/todos')
.get((req, res) => {
   res.json([
      {
        "_id": 1,
        "text": "Item 1",
        "done": false
      },
      {
        "_id": 2,
        "text": "Item 2",
        "done": false
      },
      {
        "_id": 3,
        "text": "Item 3",
        "done": true
      },
      {
        "_id": 4,
        "text": "Item 4",
        "done": false
      },
   ]);
});

app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
