const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Express app on Nginx')
})

app.listen(port, () => console.log(`Express app on port ${port}`))