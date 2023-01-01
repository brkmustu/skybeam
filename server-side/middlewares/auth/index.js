const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Kimlik doğrulama ara katmanından merhabalar!')
})

app.listen(port, () => {
  console.log(`authentication middleware listening on port ${port}`)
})