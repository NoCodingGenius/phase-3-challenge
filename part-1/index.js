const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const daysOfWeek = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

app.get('/api/days/:day', function (req, res) {
  const day = req.params.day;

  for (let key in daysOfWeek) {
    if (key === day) {
      res.send(String(daysOfWeek[`${day}`]));
    } 
  }
  res.status(400).send(`${day} is not a valid day!`)
});

app.post('/api/array/concat', function (req, res) {
  const array1 = req.body.array1;
  const array2 = req.body.array2;
  const result = array1.concat(array2);

  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    res.status(400).send({"error": "Input data should be of type Array"});
  } else {
    res.send({"result": result});
  }
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`)
})
