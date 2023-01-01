const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/api/accounts/', (req, res) => {
  res.send('Hesaplar servisinden merhabalar!')
})

app.listen(port, () => {
  console.log(`Hesaplar servisi ${port} numaralı portu dinlemeye başladı`)
})