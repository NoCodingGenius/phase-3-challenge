const express = require('express');
const app = express();
const PORT = 3000;

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
})

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}!`)
})
